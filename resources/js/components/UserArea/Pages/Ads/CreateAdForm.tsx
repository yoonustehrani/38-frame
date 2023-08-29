import { FC, useEffect, useRef, useState } from "react";
import { SiteCategory, UploadingFiles, createAdAction, createAdActionTypes, initialFormValues, pricingType } from "./types";
import FormSection from "../../components/FormSection";
import FormSubtitle from "../../components/FormSubtitle";
import { Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

interface CreateAdFormProps {
    handleAddFiles: React.ChangeEventHandler<HTMLInputElement>
    handleRemoveFile: React.MouseEventHandler<HTMLButtonElement>
    handleSubmit: React.FormEventHandler
    dispatch: React.Dispatch<createAdAction>
    categories: SiteCategory[]
    files: UploadingFiles[]
}

const {
    SET_CATEGORY,
    SET_TITLE,
    SET_PRICING_TYPE,
    SET_PRICE,
    SET_PHONE_NUMBER,
    SET_DELIVERY_TYPE,
    SET_DESCRIPTION,
    SET_ADDRESS
} = createAdActionTypes

const CreateAdForm: FC<CreateAdFormProps> = ({handleSubmit, dispatch, handleAddFiles, handleRemoveFile, categories, files}) => {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [deliveryType, setDeliveryType] = useState<number>(1)
    const [price, setPrice] = useState<number>(0)
    const [pricing, setPricing] = useState<pricingType>('price')

    useEffect(() => {
        dispatch({type: SET_PRICING_TYPE, payload: pricing})
        if (pricing !== 'price') {
            setPrice(0)
        }
    }, [pricing])

    useEffect(() => {
        dispatch({type: SET_PRICE, payload: price})
    }, [price])

    useEffect(() => {
        dispatch({type: SET_DELIVERY_TYPE, payload: deliveryType})
    }, [deliveryType])
    
    return (
        <form className="grid md:grid-cols-2 gap-4 md:gap-8 my-6 pb-6 px-3" onSubmit={handleSubmit}>
            <FormSection required label={{ for: 'category', text: 'دسته بندی آگهی' }}>
                <select onChange={e => dispatch({type: SET_CATEGORY, payload: e.target.value})} defaultValue={initialFormValues.category_id} name="category" id="category" className="form-input py-1 pt-3 px-3">
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.label}</option>
                    ))}
                </select>
            </FormSection>
            <FormSection required label={{ for: 'title', text: 'عنوان آگهی' }}>
                <input onChange={e => dispatch({type: SET_TITLE, payload: e.target.value})} maxLength={70} id="title" type="text" name="title" className="form-input py-2 pt-3 px-3" />
            </FormSection>
            <div className="col-span-full">
                <div className="relative md:w-1/2">
                    <label htmlFor="photos" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">تصاویر آگهی *</label>
                    <input onChange={handleAddFiles} ref={fileInputRef} maxLength={70} accept="image/*" id="photos" type="file" multiple name="photos[]" className="hidden" />
                    <div onClick={() => fileInputRef.current?.click()} className="form-input py-2 pt-3 px-3 cursor-pointer">
                        <button type="button" className="text-gray-700">انتخاب فایل <span className="text-sm">({files.length} از 10)</span></button>
                    </div>
                </div>
            </div>
            {files.length > 0 && (
                <div className="col-span-full flex flex-wrap gap-4 py-4">
                {files.map(({src, name, sizeInKb, allowed}) => (
                    <div key={src} className={`relative ring-2 ${allowed ? 'ring-x-green ring-opacity-20' : 'ring-red-500'} w-40 overflow-hidden rounded-md flex flex-col items-center justify-center gap-2 p-2`}>
                        <button type="button" className="bg-red-500 bg-opacity-50 hover:bg-opacity-100 duration-500 text-slate-50 absolute rounded-full text-xs px-2 py-1 left-1 top-1" onClick={handleRemoveFile} data-src={src}>حذف</button>
                        {! allowed && <span className="bg-red-600 bg-opacity-80 text-slate-50 absolute rounded-full text-xs px-2 py-1 mx-2 text-center">حجم عکس بیش از 500 کیلوبایت است</span>}
                        <img className="h-auto w-full" src={src} alt={name} />
                        <span className="text-xs text-center">{name}</span>
                        <span className="text-xs text-center bg-gray-200 px-2 rounded-full">{Math.ceil(sizeInKb * 10) / 10} کیلوبایت</span>
                    </div>
                ))}
            </div>
            )}
            <FormSubtitle text="توضیحات تکمیلی">
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M24,24H12.018A12,12,0,1,1,24,11.246l0,.063ZM12.018,2a10,10,0,1,0,0,20H22V11.341A10.018,10.018,0,0,0,12.018,2Z"/><rect x="7" y="7" width="6" height="2"/><rect x="7" y="11" width="10" height="2"/><rect x="7" y="15" width="10" height="2"/></g></svg>
            </FormSubtitle>
            <div className="col-span-full">
                <FormControl>
                    <label  className="text-gray-600 mb-2">شیوه تعیین قیمت *</label>
                    <RadioGroup
                        row
                        name="controlled-radio-buttons-group"
                        value={pricing}
                        onChange={e => setPricing(e.target.value as pricingType)}
                    >
                        <FormControlLabel value="price" control={<Radio />} label="قیمت پیشنهادی خودم" />
                        <FormControlLabel value="negotiation" control={<Radio />} label="توافقی" />
                        <FormControlLabel value="trade-off" control={<Radio />} label="معاوضه" />
                    </RadioGroup>
                </FormControl>
            </div>
            {pricing === 'price' && (
                <div>
                    <div className="relative">
                        <label htmlFor="price" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">قیمت کالا</label>
                        <input id="price" type="text" onChange={(e) => setPrice(Number(e.target.value))} value={price} min={0} maxLength={9} step={10000} name="price" className="form-input ltr py-2 pt-3 px-3" />
                    </div>
                    {typeof price === 'number' && price > 0 && (<span className="px-4 sticky left-0">{new Intl.NumberFormat('fa-IR').format(price)} تومان</span>)}
                </div>
            )}
            <FormSection className="col-span-full" label={{ for: 'description', text: 'توضیحات آگهی' }}>
                <textarea onChange={e => dispatch({type: SET_DESCRIPTION, payload: e.target.value})} maxLength={600} id="description" name="description" className="form-textarea"></textarea>
            </FormSection>
            <FormSubtitle text="اطلاعات تماس">
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z"/></svg>
            </FormSubtitle>
            <FormSection required label={{ for: 'phone_number', text: 'شماره تلفن' }}>
                <input onChange={e => dispatch({type: SET_PHONE_NUMBER, payload: e.target.value})} id="phone_number" type="text" name="phone_number" className="form-input ltr py-2 pt-3 px-3" placeholder="مثال:‌ 09121234567"/>
                <div className="w-full flex items-center mt-2 px-2">
                    <label className="text-gray-700 font-bold text-xs cursor-pointer" htmlFor="sms-only">فقط از طریق پیامک پاسخگو هستم.</label>
                    <Checkbox id="sms-only" color="default" size="small"/>
                </div>
            </FormSection>
            <FormSection label={{ for: 'address_line', text: 'تلفن ثابت' }}>
                <input id="address_line" type="address_line" name="address_line" className="form-input ltr py-2 pt-3 px-3" placeholder="همراه با کد استان"/>
            </FormSection>
            <FormSubtitle text="تحویل کالا">
                <svg className="ml-2" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m21 0h-18a3 3 0 0 0 -3 3v21h24v-21a3 3 0 0 0 -3-3zm1 3v2h-7v-3h6a1 1 0 0 1 1 1zm-11-1h2v6h-2zm-8 0h6v3h-7v-2a1 1 0 0 1 1-1zm-1 20v-15h7v3h6v-3h7v15zm13-4h5v2h-5z"/></svg>
            </FormSubtitle>
            <FormControl>
                <label  className="text-gray-600">نوع تحویل *</label>
                <RadioGroup
                    row
                    name="controlled-radio-buttons-group"
                    value={deliveryType.toString()}
                    onChange={e => setDeliveryType(Number(e.target.value.toString()))}
                >
                    <FormControlLabel value="1" control={<Radio />} label="حضوری" />
                    {/* <span className="text-sm inline-block">تحویل در شهر خودم</span> */}
                    <FormControlLabel value="2" control={<Radio />} label="غیرحضوری" />
                    {/* <span className="text-sm inline-block">ارسال به شهر دیگران</span> */}
                    <FormControlLabel value="3" control={<Radio />} label="هر دو" />
                </RadioGroup>
            </FormControl>
            {[1, 3].includes(deliveryType) && (
                <FormSection label={{ for: 'address', text: 'منطقه محل تحویل' }} className="col-span-full">
                    <textarea onChange={e => dispatch({type: SET_ADDRESS, payload: e.target.value})} id="address" name="address" className="form-textarea"></textarea>
                </FormSection>
            )}
            <div className="col-span-full flex justify-center">
                <button onClick={handleSubmit} className="text-lg duration-300 text-white bg-emerald-700 py-1 px-3 rounded-md border border-b-4 border-b-emerald-900/90 w-fit">ثبت آگهی</button>
            </div>
        </form>
    );
}
 
export default CreateAdForm;