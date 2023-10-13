import { FC, useEffect, useState } from "react";
import { fetchCategories } from "../../../api";
import ServiceGroupSelectBox from "./ServiceGroupSelectBox";

interface AddServiceRowProps {
    
}

interface ServiceInstance {
    id: number
    title: string
}

const AddServiceRow: FC<AddServiceRowProps> = () => {
    const [selectedGroup, selectGroup] = useState<number>()
    const [services, setServices] = useState<ServiceInstance[]>()
    const [selectedService, selectService] = useState<number>()

    // useEffect(() => {

    // }, [selectedGroup])

    return (
        <div className="col-span-full flex flex-wrap gap-3 items-center">
            <ServiceGroupSelectBox selectGroup={selectGroup} selectedGroup={selectedGroup}/>
            <button className="flex flex-row-reverse items-center gap-2 font-bold duration-300 hover:fill-emerald-900 hover:text-emerald-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path d="M17,12c0,.553-.448,1-1,1h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1Zm7-7v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z"/></svg>
                افزودن
            </button>
        </div>
    );
}
 
export default AddServiceRow;