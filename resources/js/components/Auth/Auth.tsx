import { FC, useEffect, useReducer, useRef} from "react";
import Form from "./Form";

const SET_EMAIL = 'SET_EMAIL'
const SET_PASSWORD = 'SET_PASSWORD'

interface AuthProps {
    GetGoogleLibrary: () => {run: () => Promise<typeof google.accounts.id>}
}

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

const Auth: FC<AuthProps> = ({GetGoogleLibrary}) => {
    const [credentials, dispatch] = useReducer(credentialsReducer, {email: null, password: null})
    const GoogleAreaRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (credentials.email && credentials.password) {
            
        }
    }, [credentials])
    // useEffect(() => {
    //     if (GoogleAreaRef.current) {
    //         GetGoogleLibrary().run().then(gLib => {
    //             gLib.renderButton(GoogleAreaRef.current as HTMLDivElement, {
    //                 type: "standard",
    //                 theme: "filled_black",
    //                 size: "large",
    //                 shape: "pill",
    //                 text: "signup_with",
    //                 locale: "fa"
    //             });
    //         })
    //     }
    // }, [GoogleAreaRef])
    return (
        <div className="bg-x-green/40 rounded-2xl w-11/12 md:w-1/2 xl:w-1/3 py-6 flex flex-col items-center gap-8 font-iran-sans px-4">
            <img width="100" src="/images/logo-300w.webp" alt=""/>
            <Form dispatch={dispatch}/>
            <div className="w-full lg:w-4/5 flex flex-col justify-center items-center mt-3">
                <hr className="w-full border-gray-400/20"/>
                <span style={{ backgroundColor: '#34473A' }} className="-mt-3 block w-fit px-2 text-slate-50 text-sm rounded-full">و یا می توانید از گزینه های زیر استفاده کنید</span>
            </div>
            <div ref={GoogleAreaRef} id="signInWithGoogleArea"></div> 
        </div>
    );
}

export default Auth;