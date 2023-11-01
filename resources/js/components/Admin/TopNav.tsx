import { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "../WebPanel/types";
import Request from "../../utils/HttpClient/Request";
import useAuth from "../WebPanel/hooks/useAuth";
interface TopNavProps {
    
}
 
const TopNav: FC<TopNavProps> = () => {
    const {user, logout} = useAuth()
    function handleLogout()
    {
        const [response, cancel] = new Request({
            baseURL: window.location.origin + '/api/auth',
            headers: {'Accept': 'application/json'}
        }).method('post').to('/logout').send()
        response.then(res => {
            if (! res.hasErrors()) {
                logout()
            }
        })
    }
    return (
        <div className="w-full fixed lg:sticky top-0 left-0 z-30 flex flex-row-reverse gap-4 justify-start items-center shadow-md bg-white h-16 px-4">
            <Link to={'/settings'}>
                <div className="h-12 w-12 rounded-full overflow-hidden cursor-pointer">
                    <img className="h-full w-auto" src={user?.avatar} alt="" />
                </div>
            </Link>
            <button onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z"/><path d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323,4.324a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z"/>
                </svg>
            </button>
            <div className="h-11 w-11 rounded-full duration-500 hover:bg-yellow-400 hover:fill-gray-900 fill-gray-900 grid place-content-center">
                <div className="h-6 w-6 svg-inherit relative">
                    <span className="absolute -left-1 -top-1 text-xs bg-red-500 text-white h-4 w-4 rounded-full text-center">2</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
                        <path d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}
 
export default TopNav;