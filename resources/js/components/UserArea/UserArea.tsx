import { FC } from "react";
import SideMenu from "./SideMenu";
import TopNav from "./TopNav";
import UserSettings from "./Pages/UserSettings";

interface UserAreaProps {
    
}
 
const UserArea: FC<UserAreaProps> = () => {
    return (
        <>
            <SideMenu />
            <main className="h-full grow overflow-x-hidden overflow-y-auto relative">
                <TopNav />
                <div className="px-6 py-6 absolute w-full top-16 md:relative md:top-0 font-iran-sans">
                    {/* Routing goes here */}
                    <UserSettings />
                </div>
            </main>
        </>
    );
}
 
export default UserArea;