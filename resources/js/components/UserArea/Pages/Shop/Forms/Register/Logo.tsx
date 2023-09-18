import { FC } from "react";

interface LogoProps {
    
}
 
const Logo: FC<LogoProps> = () => {
    return (
        <div className="col-span-full flex flex-col items-center gap-4">
            <div className="h-32 w-32 ring-4 ring-x-yellow ring-opacity-30 rounded-full overflow-hidden cursor-pointer">
                <img className="h-full w-auto" src="https://lh3.googleusercontent.com/a/AAcHTtcj0a4dP5eddufZTseCn5LISSUSSDzdQ10R8fQ6miVnRgtnsY9l9LfRYwOo89k4cSNJLCmARbHvdkilFlwa4Y0wrU4=s288-c-no" alt="" />
            </div>
            <p className="text-gray-400 text-sm text-center leading-loose">
                <span className="text-gray-700 font-bold">برای آپلود روی دایره بالا کلیک کنید.</span>
                <br />
                <span>عکس ها با فرمت jpeg، jpg، png و webp قابل آپلود هستند.</span>
                <br />
                <span>حداکثر حجم فایل:‌ 500 کیلوبایت</span>
            </p>
            {/* <button className="text-red-700 text-sm font-semibold px-3 py-2 rounded-xl bg-red-100 hover:bg-red-200 duration-300">حذف عکس پروفایل</button> */}
        </div>
    );
}
 
export default Logo;