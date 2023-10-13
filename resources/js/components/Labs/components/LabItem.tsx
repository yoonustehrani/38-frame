import { FC } from "react";
import Stars from "./Stars";
import { LabObject } from "../types";
import ActiveBadge from "./ActiveBadge";
import { LabCategory } from "../types";

interface LabItemProps extends LabObject {}

const LabItem: FC<LabItemProps> = ({brand, logo, location, active = true, rating, uri, category}) => {
    return (
        <a href={uri} className="bg-gray-100 rounded-lg overflow-hidden shadow-md shadow-black/10 flex flex-col justify-between">
            <div className="relative mb-8">
                <img className="w-full h-auto" src="/images/service-darkroom.webp" alt=""/>
                <div className="w-full absolute -bottom-8 flex justify-center">
                    <div className="h-20 w-20 flex justify-center items-center rounded-full overflow-hidden p-4 bg-black/60 ring-4 ring-x-yellow ring-opacity-40">
                        <img className="h-auto w-full" src={logo} alt=""/>
                    </div>
                </div>
                <ActiveBadge active={active}/>
            </div>
            <div className="py-4 px-3">
                <h4 className="text-lg text-center font-bold text-gray-900">{brand}</h4>
                <h5 className="mt-3 text-sm text-center font-bold text-gray-700">{LabCategory[category as keyof typeof LabCategory]}</h5>
                <div>
                    <hr className="my-3" />
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline fill-gray-700" viewBox="0 0 24 24" width="20" height="20"><path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,2.968,2.166,5.439,5,5.916v11.084c0,.552,.448,1,1,1s1-.448,1-1V11.916c2.834-.477,5-2.948,5-5.916Zm-6,4c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"/></svg>
                            {location}
                        </div>
                        <Stars amount={rating}/>
                    </div>
                </div>
            </div>
        </a>
    );
}
 
export default LabItem;