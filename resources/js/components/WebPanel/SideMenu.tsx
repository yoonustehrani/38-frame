import { FC, ReactNode } from "react";
import NavItem from "../UserArea/Nav/NavItem";

interface SideMenuProps {
    children?: ReactNode
}

const SideMenu: FC<SideMenuProps> = ({children}) => {
    return (
        <aside className="h-full pb-4 shrink-0 border-l border-dashed border-gray-300 px-3 hidden lg:flex lg:flex-col">
            <section className="py-3 flex grow-0 justify-center">
                <img width="50" src="/images/logo-300w.webp" alt=""/>
            </section>
            {children}
            <ul className="userarea-menu a-full sticky bottom-0 font-iran-sans">
                <NavItem uri="/signout" title="خروج" className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z"/><path d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323,4.324a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z"/>
                    </svg>
                </NavItem>
            </ul>
        </aside>
    );
}
 
export default SideMenu;