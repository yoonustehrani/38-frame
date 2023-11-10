import { FC, useEffect, useReducer, useState } from "react";
import ServiceGroupSelectBox from "./ServiceGroupSelectBox";
import ServiceSelectBox from "./ServiceSelectBox";
import Input from "../../../../../../WebPanel/components/Form/Input";
import TextArea from "../../../../../../WebPanel/components/Form/TextArea";
import { ServiceItem } from "./types";

interface AddServiceRowProps {
    appendService: (service: ServiceItem) => void
}

interface ServiceState {
    service_id?: number
    title?: string
    description?: string
    price?: number
    price_note?: string
}

type SetServiceAction = {type: 'SET_SERVICE', payload: {id: number, title: string}}
type SetPriceAction = {type: 'SET_PRICE', payload: number}
type SetDescriptionAction = {type: 'SET_DESCRIPTION', payload: string}
type SetPriceNote = {type: 'SET_PRICE_NOTE', payload: string}
type ClearAction = {type: 'CLEAR'}
type ClearAllAction = {type: 'CLEAR_ALL'}
type Actions = SetServiceAction | SetDescriptionAction | SetPriceAction | SetPriceNote | ClearAction | ClearAllAction
const createServiceReducer = (state: ServiceState, action: Actions) => {
    switch (action.type) {
        case 'SET_SERVICE':
            return {...state, title: action.payload.title, service_id: action.payload.id}
        case 'SET_DESCRIPTION':
            return {...state, description: action.payload}
        case 'SET_PRICE':
            return {...state, price: action.payload}
        case 'SET_PRICE_NOTE':
            return {...state, price_note: action.payload}
        case 'CLEAR':
            return {service_id: state?.service_id, title: state?.title}
        case 'CLEAR_ALL':
            return {}
        default:
            return state
    }
}

const AddServiceRow: FC<AddServiceRowProps> = ({appendService}) => {
    const [selectedGroup, selectGroup] = useState<number>()
    const [serviceDetails, dispatch] = useReducer(createServiceReducer, {})
    let {service_id, description, price, price_note} = serviceDetails
    useEffect(() => {
        if (service_id) {
            dispatch({type: 'CLEAR'})
        }
    }, [service_id, selectedGroup])
    function selectService(serviceId: number, title: string) {
        dispatch({type: 'SET_SERVICE', payload: {id: serviceId, title}})
    }
    function changePrice(price: number) {
        dispatch({type: 'SET_PRICE', payload: price})
    }
    function changePriceNote(note: string) {
        dispatch({type: 'SET_PRICE_NOTE', payload: note})
    }
    function changeDescription(description: string) {
        dispatch({type: 'SET_DESCRIPTION', payload: description})
    }
    return (
        <div className="col-span-full flex flex-wrap gap-3 items-center">
            <ServiceGroupSelectBox selectGroup={selectGroup} selectedGroup={selectedGroup}/>
            {selectedGroup && <ServiceSelectBox selectService={selectService} selectedService={service_id} selectedGroup={selectedGroup}/>}
            {service_id && (
                <section className="w-full py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input value={price} onChange={e => changePrice(Number(e.target.value))} name="unimportant[price]" type="number" min={1000} step={1000} label="قیمت" key={`${service_id}-price`} id="service-price" className="px-3 py-2">
                        {price && (
                            <p className="py-4 px-3">{new Intl.NumberFormat('fa-IR').format(price)} تومان</p>
                        )}
                    </Input>
                    <Input value={price_note} onChange={e => changePriceNote(e.target.value)} name="unimportant[price_note]" label="توضیحات قیمت" key={`${service_id}-price-note`} id="service-price-note" className="px-3 py-2"/>
                    <TextArea required label="توضیحات" key={`${service_id}-description`} id="service-description" value={description} onChange={e => changeDescription(e.target.value)} name="unimportant[description]" className="px-3 py-2"/>
                </section>
            )}
            {description && description.length > 3 && (
                <div className="w-full py-2 flex items-center justify-center">
                    <button type="button" onClick={() => {
                        appendService(serviceDetails as ServiceItem)
                        dispatch({type: 'CLEAR_ALL'})
                    }} className="flex flex-row-reverse items-center gap-2 font-bold duration-300 hover:fill-emerald-900 hover:text-emerald-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"><path d="M17,12c0,.553-.448,1-1,1h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1Zm7-7v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z"/></svg>
                        افزودن
                    </button>
                </div>
            )}
        </div>
    );
}
 
export default AddServiceRow;