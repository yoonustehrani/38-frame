import { FC, useEffect, useMemo, useReducer } from "react";
import { useField } from "formik";
import { ServiceItem } from "./components/types";
import AddServiceRow from "./components/AddServiceRow";
import { toPersian } from "../../../../../../utils/Number/numbers";
import { v4 as uuidv4 } from 'uuid';

interface LabServicesFormProps {
    
}

type ADD_SERVICE = {type: 'ADD_SERVICE', payload: ServiceItem}
type REMOVE_SERVICE = {type: 'REMOVE_SERVICE', payload: string}
type Actions = ADD_SERVICE | REMOVE_SERVICE


interface StoredServiceItem extends ServiceItem {
    id: string
}

const servicesReducer = (state: StoredServiceItem[], action: Actions) => {
    switch (action.type) {
        case 'ADD_SERVICE':
            return [...state, {...action.payload, id: uuidv4()}]
        case 'REMOVE_SERVICE':
            return state.filter(x => x.id !== action.payload)
        default:
            break;
    }
    return state
}

const LabServicesForm: FC<LabServicesFormProps> = () => {
    const [servicesField, serviceFieldMeta, serviceFieldHelpers] = useField({name: 'services'})
    const initialValues = useMemo(() => servicesField.value, [])
    const [services, dispatchChanges] = useReducer(servicesReducer, initialValues)
    useEffect(() => {
        serviceFieldHelpers.setValue(services.map(x => ({
            service_id: x.service_id,
            description: x.description,
            price: x.price,
            price_note: x.price_note
        })))
    }, [services.length])
    function removeService(serviceId: string) {
        dispatchChanges({type: 'REMOVE_SERVICE', payload: serviceId})
    }
    function addService(service: ServiceItem) {
        dispatchChanges({type: 'ADD_SERVICE', payload: service})
    }
    return (
        <>
            <AddServiceRow appendService={addService}/>
            <div className="col-span-full relative">
                <table className="w-full text-sm text-cetner text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="py-2">#</th>
                            <th className="py-2">عنوان</th>
                            <th className="py-2">نرخ خدمات</th>
                            <th className="py-2">توضیحات</th>
                            <th className="py-2">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => (
                            <tr key={service.service_id} className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">{service.title}</td>
                                <td className="px-6 py-4">{service.price ? `${toPersian(service.price)} تومان` : ''}<br />{service.price_note}</td>
                                <td className="px-6 py-4">{service.description}</td>
                                <td className="px-6 py-4 flex justify-center items-center">
                                    <button onClick={() => removeService(service.id)} type="button" className="bg-red-100 fill-red-900 w-7 h-7 rounded-md flex justify-center items-center">
                                        <svg className="fill-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>
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