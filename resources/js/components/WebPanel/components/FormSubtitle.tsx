import { FC, ReactNode } from "react";

interface FormSubtitleProps {
    text: string
    children?: ReactNode
    className?: string
}
 
const FormSubtitle: FC<FormSubtitleProps> = ({text, children, className = ''}) => {
    return (
        <h2 className={`font-semibold text-gray-800 h-5 svg-inherit col-span-full ${className}`}>
            {children}
            {text}
        </h2>
    );
}
 
export default FormSubtitle;