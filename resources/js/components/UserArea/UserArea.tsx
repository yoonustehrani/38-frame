import { FC, useLayoutEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { getRouter } from "./router";
import { User } from "../WebPanel/types";
import Request from "../../utils/HttpClient/Request";
import authContext from "../WebPanel/context/authContext";

const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

interface UserAreaProps {
    
}

const UserArea: FC<UserAreaProps> = () => {
    const [user, setUser] = useState<null | User>(null)
    const Auth = { 
        user,
        login: (user: User) => {
            setUser(user)
        },
        logout: () => {
            setUser(null)
        }
    }
    const [loading, setLoading] = useState(true)
    useLayoutEffect(() => {
        if (! user) {
            const [requestUser, cancelRequest] = (new Request(ApiConfig).to('/user').send())
            requestUser.then(res => {
                if (! res.hasErrors()) {
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
                <RouterProvider router={getRouter(user != null)} />
            </authContext.Provider>
        )
    }
}
 
export default UserArea;