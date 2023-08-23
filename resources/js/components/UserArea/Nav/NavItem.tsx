import { FC } from "react";
import { NavLink } from "react-router-dom";
interface NavItemProps {
    uri: string
    title: string
    active?: boolean
    className?:string
    children?: React.ReactNode
}
 
const NavItem: FC<NavItemProps> = ({ uri, title, children, className = '' }) => {
    return (
        <li>
            <NavLink to={uri} className={({ isActive }) => isActive ? 'active' : className}>
                {children !== null && (
                    <div className="inline-block h-5 svg-inherit">
                        {children}
                    </div>
                )}
                <span className="mx-2 text-lg">{title}</span>
            </NavLink>
        </li>
    );
}
 
export default NavItem;