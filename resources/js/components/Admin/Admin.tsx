import { FC, useLayoutEffect, useState } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { getRouter } from "./router";
import { User } from "../WebPanel/types";
import Request from "../../utils/HttpClient/Request";
import authContext from "../WebPanel/context/authContext";
import HandledRequest from "./utils/HandledRequest";

interface AdminProps {
    
}

const Admin: FC<AdminProps> = () => {
    const [user, setUser] = useState<null | User>(null)
    const [userAllowed, setUserAllowed] = useState(true)
    const Auth = { 
        user,
        login: (user: User) => {
            setUserAllowed(true)
            setUser(user)
        },
        logout: () => {
            setUserAllowed(true)
            setUser(null)
        },
        disallow: () => {
            setUserAllowed(false)
        }
    }
    const [loading, setLoading] = useState(true)
    useLayoutEffect(() => {
        if (! user) {
            const [requestUser, cancelRequest] = HandledRequest(Auth).to('/admin').send()
            requestUser.then(res => {
                if (res.hasErrors()) {
                    if (res.getErrorObject()?.getStatus() === 403) {
                        setUserAllowed(false)
                    }
                } else {
                    setUser(res.getContent() as User)
                }
                setLoading(false)
            })
            return () => cancelRequest()
        }
    }, [user])
    if (! loading) {
        return (
            <authContext.Provider value={Auth}>
                <RouterProvider router={getRouter(user != null, userAllowed)} />
            </authContext.Provider>
        )
    }
}

export default Admin;