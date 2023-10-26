import { FC, useCallback, useContext, useEffect, useLayoutEffect, useReducer, useRef, useState} from "react";
import Form from "./Form";
import { requestLogin, requestSanctumCSRFCookie } from "./api";
import HttpResponse from "../../utils/HttpClient/HttpResponse";
import Request from "../../utils/HttpClient/Request";
import authContext from "../WebPanel/context/authContext";
import useGoogleLibrary from "./useGoogleLibrary";

const SET_EMAIL = 'SET_EMAIL'
const SET_PASSWORD = 'SET_PASSWORD'

interface AuthProps {
    endpoint: string
}


type handleFunction = (response: google.accounts.id.CredentialResponse) => void

const credentialsReducer = (state: AuthFormState, action: CredentialsAction) => {
    switch (action.type) {
        case SET_EMAIL:
            return {...state, email: action.payload}
        case SET_PASSWORD:
            return {...state, password: action.payload}
        default:
            return state
    }
}

const Auth: FC<AuthProps> = ({endpoint}) => {
    const Auth = useContext(authContext)
    const [credentials, dispatch] = useReducer(credentialsReducer, {email: null, password: null})
    const GoogleAreaRef = useRef<HTMLDivElement>(null)
    const gLibWorks = useGoogleLibrary(GoogleAreaRef.current, async function handleCredentialResponse(response: google.accounts.id.CredentialResponse) {
        let data = {
            token: response.credential
        }
        const [GoogleAuthRequest] = new Request({
            headers: {
                "Content-Type": "application/json",
            },
            baseURL: location.origin + '/api'
        }).to('/auth/google').method('post').send(data)
        GoogleAuthRequest.then(res => {
            if (! res.hasErrors()) {
                Auth.login(res.getContent())
            }
        })
    })
    useEffect(() => {
        if (credentials.email && credentials.password) {
            requestSanctumCSRFCookie()[0].then(() => {
                const [loginRequest, cancel] = requestLogin(endpoint, credentials)
                function loginCheckAndRedirect(res: HttpResponse) {
                    if (res.hasErrors()) {
                        console.log(res.getErrors());
                    } else {
                        Auth.login(res.getContent())
                    }
                }
                loginRequest.then(loginCheckAndRedirect)
                return () => cancel()
            })
        }
    }, [credentials])

    return (
        <div className="bg-x-green/40 rounded-2xl w-11/12 md:w-1/2 xl:w-1/3 py-6 flex flex-col items-center gap-8 font-iran-sans px-4">
            <img width="100" src="/images/logo-300w.webp" alt=""/>
            <Form dispatch={dispatch}/>
            {gLibWorks && (
                <div className="w-full lg:w-4/5 flex flex-col justify-center items-center mt-3">
                    <hr className="w-full border-gray-400/20"/>
                    <span style={{ backgroundColor: '#34473A' }} className="-mt-3 block w-fit px-2 text-slate-50 text-sm rounded-full">و یا می توانید از گزینه های زیر استفاده کنید</span>
                </div>
            )}
            <div ref={GoogleAreaRef} id="signInWithGoogleArea"></div>
        </div>
    );
}

export default Auth;