import { FC } from "react";
import Stars from "./components/Stars";

interface LoadingLabItemProps {
    
}
 
const LoadingLabItem: FC<LoadingLabItemProps> = () => {
    return (
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md shadow-black/10">
            <div className="relative mb-8">
                <div className="w-full h-auto aspect-video skeleton"></div>
                <div className="w-full absolute -bottom-8 flex justify-center">
                    <div className="h-20 w-20 flex justify-center items-center rounded-full overflow-hidden p-4 skeleton ring-4 ring-black/5 ring-opacity-40">
                    </div>
                </div>
                <span className={`absolute top-2 left-3 font-bold  px-3 rounded-full skeleton w-14 h-6`}></span>
            </div>
            <div className="py-4 px-3">
                <h4 className="text-lg text-center font-bold text-gray-900 w-32 h-5"></h4>
                <hr className="my-3" />
                <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline fill-gray-700" viewBox="0 0 24 24" width="20" height="20"><path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,2.968,2.166,5.439,5,5.916v11.084c0,.552,.448,1,1,1s1-.448,1-1V11.916c2.834-.477,5-2.948,5-5.916Zm-6,4c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"/></svg>
                        {/* {location} */}
                    </div>
                    <Stars amount={0}/>
                </div>
            </div>
        </div>
    );
}
 
export default LoadingLabItem;