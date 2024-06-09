import { FC } from "react";
import { Level } from "./types";
import { FormikErrors } from "formik";
import { toPersian } from "../../../../utils/Number/numbers";

interface FormTopNavProps {
    level: number
    levels: Level[]
    setLevel: React.Dispatch<React.SetStateAction<number>>
    errors: FormikErrors<{
        [k: string]: any;
    }>
    displayErrors: boolean
}
// FormikErrors<typeof formInitialValues>
 
const FormTopNav: FC<FormTopNavProps> = ({level, levels, errors, setLevel, displayErrors}) => {
    function getLevelErrors(_level: number, errors: FormikErrors<any>) {
        return getLevelKeys(_level).filter(key => Object.keys(errors).includes(key))
    }
    function getLevelKeys (level: number) {
        return Object.keys(levels[level].initialValues)
    }
    return (
        <div className="w-full overflow-x-auto h-28 px-8">
            <section className="w-[200%] md:w-auto px-8">
                <div className="bg-gray-300 h-2 rounded-full w-full mt-8">
                    <div style={{ width: `${(100 / (levels.length - 1)) * level}%` }} className="h-2 bg-zebra width-transition"></div>
                </div>
                <div className="grid grid-rows-1 grid-flow-col place-content-between text-center mt-2 w-full">
                    {levels.map(({title}, i) => {
                        let hasErrors = displayErrors && getLevelErrors(i, errors).length > 0
                        return (
                            <div key={i} className="px-3 grow text-center pt-3 relative flex justify-center">
                                <span onClick={() => setLevel(i)} className={`cursor-pointer duration-300 circleular-dot text-black ${i <= level ? 'bg-x-yellow' : 'bg-gray-400'}`}>
                                    {toPersian(i + 1)}
                                </span>
                                <span onClick={() => setLevel(i)} className={`cursor-pointer absolute w-max duration-300 text-xs ${i <= level ? 'text-black' : 'text-gray-500'}`}>
                                    {title}
                                    {hasErrors && (
                                        <span className="mx-1 h-4 w-4 inline-grid place-content-center bg-red-500 text-white rounded-full text-center">!</span>
                                    )}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}
 
export default FormTopNav;