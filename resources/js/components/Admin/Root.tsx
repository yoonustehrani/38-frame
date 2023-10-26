import { FC } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import SideMenu from "../WebPanel/SideMenu";
import TopNav from "./TopNav";

interface RootProps {
    
}
 
const Root: FC<RootProps> = () => {
    const navigation = useNavigation()
    let loading = navigation.state === 'loading' && ! /\/userarea\/settings.*/.test(navigation.location.pathname)
    return (
        <>
            <SideMenu>
                
            </SideMenu>
            <main className="h-full grow overflow-x-hidden overflow-y-auto relative">
                <TopNav />
                <div className="px-6 py-6 absolute w-full top-16 md:relative md:top-0 font-iran-sans">
                    {loading ? <div>در حال لود کردن</div> : <Outlet />}
                </div>
            </main>
        </>
    );
}
 
export default Root;