import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

interface UserSettingsProps {
    
}

const Tabs = [
    {
        text: 'اطلاعات فردی',
        uri: '/settings'
    },
    {
        text: 'مالی و بانکی',
        uri: '/settings/finance'
    },
    {
        text: 'اطلاعیه ها',
        uri: '/settings/notifications'
    },
    {
        text: 'شبکه های اجتماعی',
        uri: '/settings/social'
    },
    {
        text: 'امنیت حساب',
        uri: '/settings/auth'
    }
];

const UserSettings: FC<UserSettingsProps> = () => {
    return (
        <>
            <h1 className="font-bold text-2xl">تنظیمات حساب کاربری</h1>
            <nav className="my-4 text-sm">
                <ul className="flex gap-4 text-gray-700">
                    <li>
                        <a className="hover:text-gray-900 hover:underline underline-offset-8 duration-500" href="#dashboard">ناحیه کاربری</a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z"/></svg>
                    </li>
                    <li className="text-gray-500">تنظیمات حساب کاربری</li>
                </ul>
            </nav>
            <section className="w-full float-left">
                <section className="w-full lg:w-4/5">
                    <nav className="w-full overflow-x-auto py-6 md:py-4">
                        <ul className="flex flex-nowrap gap-4 text-gray-400 font-semibold w-max snap-x snap-mandatory">
                            {Tabs.map(({text, uri}) => (
                                <li key={uri} className="snap-always snap-center">
                                    <NavLink end className={({isActive}) => {
                                        return `px-4 py-2 ${isActive ? 'text-gray-700 bg-white border-b-2 border-b-gray-700 rounded-t-lg' : ''}`
                                    }} to={uri}>
                                        {text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Outlet />
                </section>
            </section>
        </>
    );
}
 
export default UserSettings;