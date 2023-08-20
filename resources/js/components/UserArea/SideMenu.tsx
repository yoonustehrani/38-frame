import { FC } from "react";
import Nav from "./Nav/Nav";

interface SideMenuProps {
    
}
 
const SideMenu: FC<SideMenuProps> = () => {
    return (
        <aside className="h-full shrink-0 overflow-x-hidden overflow-y-auto border-l border-dashed border-gray-300 px-3 hidden lg:block">
            <section className="py-4 flex justify-center">
                <img width="50" src="/images/logo-300w.webp" alt=""/>
            </section>
            <Nav />
        </aside>
    );
}
 
export default SideMenu;