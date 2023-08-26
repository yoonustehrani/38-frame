import { FC, ReactNode } from "react";

interface FormSectionProps {
    label?: {
        for: string
        text: string
    },
    children: ReactNode
    required?: boolean
    className?: string
}
 
const FormSection: FC<FormSectionProps> = ({label, children , required = false, className = ''}) => {
    return (
        <div className={className}>
            <div className="relative">
                {label && <label htmlFor={label.for} className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">{label.text}{required && ' *'}</label>}
                {children}
            </div>
        </div>
    );
}
 
export default FormSection;