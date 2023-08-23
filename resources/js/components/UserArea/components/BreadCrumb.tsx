import { FC, ReactNode, Children, cloneElement, useMemo, ReactElement, JSXElementConstructor } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { Link } from "react-router-dom";

interface BreadCrumbProps {
    children: ReactNode
}

interface BreadCrumbItemProps {
    children: ReactNode
    link?: string
    isLastItem?: boolean
}

type InvokableReactChildCustom = ReactElement<any, JSXElementConstructor<any>>

export const BreadCrumbItem: FC<BreadCrumbItemProps> = ({children, link, isLastItem = false}) => {
    return (
        <li className={isLastItem ? 'text-gray-400' : ''}>
            {link ? (
                <Link className="hover:text-gray-900 hover:underline underline-offset-8 duration-500" to={link}>{children}</Link>
            ) : children}
        </li>
    )
}

const BreadCrumb: FC<BreadCrumbProps> = ({ children }) => {
    const arrayOfChildren = useMemo(() => {
        return Children.toArray(children);
    }, [children])
    return (
        <nav className="my-4 text-sm">
            <ul className="flex gap-4 text-gray-800">
                {Children.map(arrayOfChildren, (child, index) => {
                    const Element = cloneElement(child as InvokableReactChildCustom, {isLastItem: index === (arrayOfChildren.length - 1)});
                    if (index > 0) {
                        return (
                            <>
                                <BreadCrumbItem><ArrowIcon size={20} to="left"/></BreadCrumbItem>
                                {Element}
                            </>
                        )
                    }
                    return Element
                })}
            </ul>
        </nav>
    );
}

export default BreadCrumb;