import { FC } from "react";
import NavItem from "../../WebPanel/NavItem";
import PlusIcon from "../../Icons/PlusIcon";

interface NavProps {
    
}
 
const Nav: FC<NavProps> = () => {
    return (
        <nav className="font-iran-sans mt-5 userarea-menu grow overflow-y-auto">
            <ul className="flex flex-col gap-2 a-full mb-2">
                <NavItem uri="/" title="داشبورد" active={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M19,24H5c-2.757,0-5-2.243-5-5V9.724c0-1.665,.824-3.215,2.204-4.145L9.203,.855c1.699-1.146,3.895-1.146,5.594,0l7,4.724c1.379,.93,2.203,2.479,2.203,4.145v9.276c0,2.757-2.243,5-5,5ZM12,1.997c-.584,0-1.168,.172-1.678,.517L3.322,7.237c-.828,.558-1.322,1.487-1.322,2.486v9.276c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V9.724c0-.999-.494-1.929-1.321-2.486L13.678,2.514c-.51-.345-1.094-.517-1.678-.517Z"/>
                    </svg>
                </NavItem>
            </ul>
            {/* If Photographer */}
            <span className="mr-1 mt-4 block text-gray-900 font-bold text-sm">- لابراتوار ها</span>
            <ul className="flex flex-col gap-1 a-full mt-2 mb-4">
                <NavItem uri="/labs/create" title="افزودن لابراتوار">
                    <PlusIcon />
                </NavItem>
                <NavItem uri="/labs" title="مدیریت لابراتوار ها">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z"/><path d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"/></svg>
                </NavItem>
            </ul>
            {/* EndIf Photographer */}
            <span className="mr-1 mt-4 block text-gray-900 font-bold text-sm">- وبلاگ</span>
            <ul className="flex flex-col gap-1 a-full mt-2 mb-4">
                <NavItem uri="/posts/create" title="افزودن مقاله">
                    <PlusIcon />
                </NavItem>
                <NavItem uri="/posts" title="مدیریت مقاله ها">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z"/><path d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"/></svg>
                </NavItem>
            </ul>
        </nav>
    );
}
 
export default Nav;