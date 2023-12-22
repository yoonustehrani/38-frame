import { FC } from "react";

interface SaveButtonProps {
    text: string
}
 
const SaveButton: FC<SaveButtonProps> = ({text}) => {
    return (
        <button type="submit" role="button" className="text-sm border font-bold border-dashed hover:border-solid hover:bg-x-green hover:text-white border-x-green text-x-green px-3 py-2 rounded-md duration-300">
            {text}
        </button> 
    );
}
 
export default SaveButton;