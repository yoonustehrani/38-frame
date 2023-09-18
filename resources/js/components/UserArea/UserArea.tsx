import { FC, StrictMode, useLayoutEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { User } from "./types";
import Request from "../../utils/HttpClient/Request";
import authContext from "./context/authContext";
interface UserAreaProps {
    
}
const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}
const UserArea: FC<UserAreaProps> = () => {
    const [user, setUser] = useState<null | User>(null)
    const [loading, setLoading] = useState(true)
    useLayoutEffect(() => {
        if (! user) {
            const [requestUser, cancelRequest] = (new Request(ApiConfig).to('/user').send())
            requestUser.then(res => {
                if (! res.hasErrors()) {
                    setUser(res.getContent() as User)
                    setLoading(false)
                }
            })
            return () => cancelRequest()
        }
    }, [user])
    return ! loading && (
        <StrictMode>
            <authContext.Provider value={user}>
                <RouterProvider router={router} />
            </authContext.Provider>
        </StrictMode>
    );
}
 
export default UserArea;