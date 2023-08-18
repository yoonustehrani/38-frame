import { FC } from "react";

interface ActionButtonProps {
    disabled: boolean
    handleWith: () => void
}
 
const ActionButton: FC<ActionButtonProps> = ({disabled, handleWith}) => {
    return (
        <button disabled={disabled} type="button" onClick={handleWith} className="mt-2 py-2 bg-x-yellow disabled:bg-gray-400 disabled:text-gray-500 text-xl rounded-lg flex justify-center gap-2">
            <span>ادامه</span>
            <svg height="30" className={disabled ? 'fill-gray-500' : ''} viewBox="0 0 64 64" width="30" xmlns="http://www.w3.org/2000/svg">
                <path d="m59.99 31.25h-51.58l8.78-8.78-1.42-1.41-11.19 11.19 11.19 11.19 1.42-1.41-8.78-8.78h51.58z"/>
            </svg>
        </button>
    );
}
 
export default ActionButton;