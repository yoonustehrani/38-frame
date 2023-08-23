import { FC } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import TopNav from "./TopNav";

interface RootProps {
    
}
 
const Root: FC<RootProps> = () => {
    return (
        <>
            <SideMenu />
            <main className="h-full grow overflow-x-hidden overflow-y-auto relative">
                <TopNav />
                <div className="px-6 py-6 absolute w-full top-16 md:relative md:top-0 font-iran-sans">
                    <Outlet />
                </div>
            </main>
        </>
    );
}
 
export default Root;