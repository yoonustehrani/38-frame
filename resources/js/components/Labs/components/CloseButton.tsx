import { FC, MouseEventHandler } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

interface CloseButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}
 
const CloseButton: FC<CloseButtonProps> = ({onClick}) => {
    return (
        <div className="fixed bottom-0 left-0 md:sr-only w-full bg-slate-50 flex justify-center items-center py-2">
            <button onClick={onClick} className="fill-gray-800">
                <ArrowIcon to="left" size={40} className="rotate-90"/>
            </button>
        </div>
    );
}
 
export default CloseButton;