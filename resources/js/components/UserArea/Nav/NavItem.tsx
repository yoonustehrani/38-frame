import { FC } from "react";

interface NavItemProps {
    uri: string
    title: string
    active?: boolean
    children: React.ReactNode
}
 
const NavItem: FC<NavItemProps> = ({ uri, title, children, active = false }) => {
    return (
        <li>
            <a href={uri} className={active ? 'active' : ''}>
                {children !== null && (
                    <div className="inline-block h-5 svg-inherit">
                        {children}
                    </div>
                )}
                <span className="mx-2 text-lg">{title}</span>
            </a>
        </li>
    );
}
 
export default NavItem;