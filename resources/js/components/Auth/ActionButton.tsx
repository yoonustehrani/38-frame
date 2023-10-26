import { FC, ReactNode } from "react";

interface ActionButtonProps {
    disabled: boolean
    handleWith: () => void
    text: string
    children?: ReactNode
    className?: string
}
// ادامه
const ActionButton: FC<ActionButtonProps> = ({disabled, handleWith, text, children, className}) => {
    return (
        <button disabled={disabled} type="button" onClick={handleWith} className={`${className} mt-2 py-2 bg-x-yellow disabled:bg-gray-400 disabled:text-gray-500 text-xl flex justify-center gap-2`}>
            <span>{text}</span>
            {children}
        </button>
    );
}
 
export default ActionButton;