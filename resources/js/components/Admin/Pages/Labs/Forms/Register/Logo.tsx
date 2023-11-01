import { FC } from "react";
import PencilIcon from "../../../../../Icons/PencilIcon";

interface LogoProps {
    
}
 
const Logo: FC<LogoProps> = () => {
    return (
        <div className="col-span-full flex flex-col items-center gap-4">
            <div className="w-full bg-slate-100 py-3 px-4 rounded-md flex justify-end relative">
                <div className="relative h-32 w-32 ring-4 ring-x-yellow ring-opacity-30 rounded-full cursor-pointer">
                    <div className="h-full w-auto rounded-full overflow-hidden">
                        <img className="h-full w-auto" src="https://lh3.googleusercontent.com/a/AAcHTtcj0a4dP5eddufZTseCn5LISSUSSDzdQ10R8fQ6miVnRgtnsY9l9LfRYwOo89k4cSNJLCmARbHvdkilFlwa4Y0wrU4=s288-c-no" alt="" />
                    </div>
                    <div className="absolute h-8 w-8 bg-x-yellow rounded-full bottom-1 right-1 flex justify-center items-center">
                        <PencilIcon size={16}/>
                    </div>
                </div>
                <button type="button" className="absolute h-8 w-8 bg-x-yellow rounded-full -bottom-2 -right-2 flex justify-center items-center">
                    <PencilIcon size={16}/>
                </button>
            </div>
            <p className="text-gray-400 text-sm text-center leading-loose">
                <span>عکس ها با فرمت jpeg، jpg، png و webp قابل آپلود هستند.</span>
                <br />
                <span>حداکثر حجم فایل:‌ 500 کیلوبایت</span>
            </p>
        </div>
    );
}
 
export default Logo;