import { FC, useEffect, useState } from "react";
import { fetchCategories, fetchServicesByCategoryId } from "../../../api";
import { ServiceInstance } from "./types";

interface ServiceSelectBoxProps {
    selectedGroup: number
    selectedService?: number
    selectService: (id: number, title: string) => void
}
 
const ServiceSelectBox: FC<ServiceSelectBoxProps> = ({selectService, selectedGroup, selectedService}) => {
    const [services, setServices] = useState<ServiceInstance[]>([])
    useEffect(() => {
        const [response, cancel] = fetchServicesByCategoryId(selectedGroup)
        response.then(res => {
            if (! res.hasErrors()) {
                setServices(res.getContent<ServiceInstance[]>())
            }
        })
        return () => cancel()
    }, [selectedGroup])
    return (
        <select className="w-fit form-input px-2 py-1" value={selectedService ?? ''} onChange={(e) => {
            selectService(
                Number(e.target.value),
                services.filter(x => x.id === Number(e.target.value))[0]?.label ?? ''
            )
        }}>
            <option value="">انتخاب کنید</option>
            {services.map(service => (
                <option key={service.id} value={service.id}>{service.label}</option>
            ))}
        </select>
    );
}
 
export default ServiceSelectBox;