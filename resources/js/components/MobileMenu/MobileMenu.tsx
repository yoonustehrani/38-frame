import { FC, useEffect, useState } from "react";
import { fetchMenu } from "./api";
import BottomNavbar from "./BottomNavbar";

interface MobileMenuProps {
    
}

interface MenuItem {
    title: string
    order: number
    label: null | string
    url: string
}

interface Menu {
    id: number
    title: string
    key: string
    items: MenuItem[]
}

const MobileMenu: FC<MobileMenuProps> = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>()
    const [active, setActive] = useState<boolean>(false)
    useEffect(() => {
        const [fetchMenuFromApi, cancel] = fetchMenu('main')
        fetchMenuFromApi.then(res => {
            if (! res.hasErrors()) {
                setMenuItems(res.getContent<Menu>().items)
            }
        })
        return cancel
    }, [])
    return (
        <>
            {active && (
                <div className="lg:hidden font-iran-sans fixed w-full h-screen top-0 left-0 z-50 bg-transparent p-4 pb-0">
                    <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-between items-center py-5 px-4 bg-x-yellow">
                            <span className="text-xl font-bold text-gray-700">۳۸ فریم</span>
                            <span>
                                <svg onClick={() => setActive(false)} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
                            </span>
                        </div>
                        <ul className={`w-full h-full flex flex-col font-bold text-lg bg-gray-100 text-gray-600`}>
                            {menuItems?.map(({url, title}, i) => (
                                <li className="border-t border-dashed border-gray-200 py-3 first-of-type:border-0" key={i}>
                                    <a className="px-6 w-full block py-3" href={url}>{title}</a>
                                </li>
                            ))}
                            {/* <li className="relative before:bg-x-grey before:delay-150 before:rotate-180 before:pointy-triangle before:middle-10px before:bottom-3 lg:h-full flex items-center">
                                <a data-has-sub href="#">فروشگاه ۳۸ فریم</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            )}
            <BottomNavbar toggleMenu={() => setActive(prevState => ! prevState)} />
        </>
    );
}
 
export default MobileMenu;