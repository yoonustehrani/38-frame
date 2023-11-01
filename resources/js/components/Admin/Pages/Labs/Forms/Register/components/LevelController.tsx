import { FC, MouseEventHandler } from "react";
import ArrowIcon from "../../../../../../Icons/ArrowIcon";


type UndefinedOrVoidFunction = undefined | (() => void)

interface LevelControllerProps {
    nextLevel: UndefinedOrVoidFunction,
    prevLevel: UndefinedOrVoidFunction,
}

const buttonClassNames = "font-bold border-2 border-dashed border-transparent hover:border-x-dark-blue hover:text-x-dark-blue duration-300 text-gray-700 flex flex-row-reverse justify-center items-center gap-2 px-4 py-1 rounded-lg"

const LevelController: FC<LevelControllerProps> = ({nextLevel, prevLevel}) => {
    const nextButtonText = nextLevel ? 'بعدی' : 'ارسال فرم'
    return (
        <div className="col-span-full flex justify-center gap-6">
            {prevLevel && <button onClick={prevLevel} className={buttonClassNames} type="button">بازگشت <ArrowIcon to="right" size={35}/></button>}
            <button className={buttonClassNames} onClick={nextLevel} type={nextLevel ? 'button' : 'submit'}><ArrowIcon to="left" size={35}/>{nextButtonText}</button>
        </div>
    );
}
 
export default LevelController;