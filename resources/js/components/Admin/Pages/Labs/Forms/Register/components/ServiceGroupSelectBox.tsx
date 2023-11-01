import { FC, useEffect, useState } from "react";
import { fetchCategories } from "../../../api";
import { ServiceGroup } from "./types";

interface ServiceGroupSelectBoxProps {
    selectedGroup?: number
    selectGroup: (id: number) => void
}

const ServiceGroupSelectBox: FC<ServiceGroupSelectBoxProps> = ({selectGroup, selectedGroup}) => {
    const [serviceGroups, setGroups] = useState<ServiceGroup[]>([])
    useEffect(() => {
        const [response, cancel] = fetchCategories()
        response.then(res => {
            if (! res.hasErrors()) {
                setGroups(res.getContent<ServiceGroup[]>())
            }
        })
        return () => cancel()
    }, [])
    return (
        <select className="w-fit form-input px-2 py-1" value={selectedGroup ?? ''} onChange={e => selectGroup(Number(e.target.value))}>
            <option value="">دسته بندی خدمات را انتخاب کنید</option>
            {serviceGroups.map(group => (
                <option key={group.id} value={group.id}>{group.label}</option>
            ))}
        </select>
    );
}
 
export default ServiceGroupSelectBox;