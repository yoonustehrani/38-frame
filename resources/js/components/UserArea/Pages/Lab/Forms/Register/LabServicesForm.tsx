import { FC, useMemo, useReducer } from "react";
import PlusIcon from "../../../../../Icons/PlusIcon";
import { useField } from "formik";
import { ServiceItem } from "./components/types";
import AddServiceRow from "./components/AddServiceRow";

interface LabServicesFormProps {
    
}

type ADD_SERVICE = {type: 'ADD_SERVICE', payload: ServiceItem}
type REMOVE_SERVICE = {type: 'REMOVE_SERVICE', payload: number}
type Actions = ADD_SERVICE | REMOVE_SERVICE
const servicesReducer = (state: ServiceItem[], action: Actions) => {
    return state
}

const LabServicesForm: FC<LabServicesFormProps> = () => {
    const [servicesField, serviceFieldMeta] = useField({name: 'services'})
    const initialValues = useMemo(() => servicesField.value, [])
    const [services, dispatchChanges] = useReducer(servicesReducer, initialValues)
    function removeService(serviceId: number) {

    }
    return (
        <>
            <AddServiceRow />
            <div className="col-span-full">
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>عنوان</th>
                            <th>نرخ خدمات</th>
                            <th>توضیحات</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => (
                            <tr key={service.service_id}>
                                <th>{index + 1}</th>
                                <td>{service.title}</td>
                                <td>
                                    {service.price}
                                    <br />
                                    {service.price_note}
                                </td>
                                <td>{service.description}</td>
                                <td>
                                    <button type="button" className="bg-red-500 text-slate-50 w-7 h-7 flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
 
export default LabServicesForm;