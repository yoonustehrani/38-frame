import { FC } from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";

interface TabularComponentProps {
    tabs: {
        text: string
        uri: string
    }[]
}
 
const TabularComponent: FC<TabularComponentProps> = ({ tabs }) => {
    const navigation = useNavigation()
    return (
        <section className="w-full float-left">
            <section className="w-full lg:w-4/5">
                <nav className="w-full overflow-x-auto py-6 md:py-4">
                    <ul className="flex flex-nowrap gap-4 text-gray-400 font-semibold w-max snap-x snap-mandatory">
                        {tabs.map(({text, uri}) => (
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
                {navigation.state === 'loading' ? <div>در حال لود کردن</div> : <Outlet />}
            </section>
        </section>
    );
}
 
export default TabularComponent;