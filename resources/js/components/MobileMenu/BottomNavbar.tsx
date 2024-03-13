import { FC } from "react";

interface BottomNavbarProps {
    toggleMenu: () => void
}
 
const BottomNavbar: FC<BottomNavbarProps> = ({ toggleMenu }) => {
    return (
        <div className="fixed lg:hidden font-iran-sans bottom-0 left-0 z-30 w-full h-18 py-2 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex w-full h-full justify-around items-center gap-2 font-medium text-center">
                <button onClick={toggleMenu} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">منو</span>
                </button>
                <a href="./userarea" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">ناحیه کاربری</span>
                </a>
                <a href="#" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20,10h-1v-2c0-2.206-1.794-4-4-4h-1.028c-.25-2.247-2.16-4-4.472-4S5.277,1.753,5.028,4h-1.028C1.794,4,0,5.794,0,8v6c0,2.757,2.243,5,5,5h1c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5v-5c0-2.206-1.794-4-4-4ZM9.5,2c1.207,0,2.217,.86,2.45,2H7.05c.232-1.14,1.242-2,2.45-2Zm-4.5,15c-1.654,0-3-1.346-3-3v-6c0-1.103,.897-2,2-2h1v2c0,.553,.448,1,1,1s1-.447,1-1v-2h5v2c0,.553,.448,1,1,1s1-.447,1-1v-2h1c1.103,0,2,.897,2,2v2h-7c-2.206,0-4,1.794-4,4v3h-1Zm17,2c0,1.654-1.346,3-3,3H11c-1.654,0-3-1.346-3-3v-5c0-1.103,.897-2,2-2h10c1.103,0,2,.897,2,2v5Zm-3-4v1c0,2.206-1.794,4-4,4s-4-1.794-4-4v-1c0-.553,.448-1,1-1s1,.447,1,1v1c0,1.103,.897,2,2,2s2-.897,2-2v-1c0-.553,.448-1,1-1s1,.447,1,1Z"/>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">فروشگاه</span>
                </a>
                <a href="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">خانه</span>
                </a>
            </div>
        </div>
    );
}
 
export default BottomNavbar;