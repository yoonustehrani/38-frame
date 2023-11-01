import { FC, useReducer, useRef } from "react";
import { AdObject, SiteCategory, createAdActionTypes, initialFormValues, pricingType, reducerState } from "./types";
import { provideAdReducer } from "./reducer";
import { Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import FormSection from "../../../WebPanel/components/FormSection";
import FormSubtitle from "../../../WebPanel/components/FormSubtitle";
import FilesList from "./FilesList";
import Input from "../../../WebPanel/components/Form/Input";
import yupFormContext from "../../../WebPanel/context/yupFormContext";
import { adDetailsSchema } from "./validationSchema";
import TextArea from "../../../WebPanel/components/Form/TextArea";

interface CreateAdFormProps {
    handleSubmit: (data: reducerState) => void
    categories: SiteCategory[]
    submitting: boolean
}

const CreateAdForm: FC<CreateAdFormProps> = ({handleSubmit, categories, submitting}) => {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [state, dispatch] = useReducer(provideAdReducer, initialFormValues)
    function setAdInfo<Key extends keyof AdObject>(key: Key, value: AdObject[Key]) {
        dispatch({type: createAdActionTypes.MODIFY_ADD, payload: {[key]: value}})
    }
    const handleAttachFiles: React.ChangeEventHandler<HTMLInputElement> = e => {
        if (! e.target.files || state.photos.length + e.target.files.length > 10) {
            return
        }
        let pickedFiles = e.target.files
        dispatch({
            type: createAdActionTypes.ATTACH_PHOTOS,
            payload: Array.from(pickedFiles).map(file => {
                let sizeInKb = file.size / 1024
                return {
                    file: file,
                    allowed: sizeInKb <= 500,
                    src: URL.createObjectURL(file),
                    name: file.name,
                    sizeInKb
                }
            })
        })
    }
    const handleRemoveFile: React.MouseEventHandler<HTMLButtonElement> = e => {
        let src = e.currentTarget.getAttribute('data-src') as string
        dispatch({type: createAdActionTypes.REMOVE_PHOTO, payload: src})
        setTimeout(() => {
            URL.revokeObjectURL(src)
        }, 1000);
    }
    
    return (
        <form className="grid md:grid-cols-2 gap-4 md:gap-8 my-6 pb-6 px-3" onSubmit={e => {
            e.preventDefault()
            e.stopPropagation()
            handleSubmit(state)
        }}>
            <FormSection  label={{ for: 'category', text: 'دسته بندی آگهی' }}>
                <select onChange={e => setAdInfo('category_id', Number(e.target.value))} defaultValue={initialFormValues.ad.category_id} name="category" id="category" className="form-input py-1 pt-3 px-3">
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.label}</option>
                    ))}
                </select>
            </FormSection>
            <yupFormContext.Provider value={adDetailsSchema}>
                <Input type="text" name="title" onChange={e => setAdInfo('title', e.target.value)} maxLength={70} id="title" label='عنوان آگهی' className="py-2 pt-3 px-3"/>
                <div className="col-span-full">
                    <div className="relative md:w-1/2">
                        <label htmlFor="photos" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">تصاویر آگهی *</label>
                        <input onChange={handleAttachFiles} ref={fileInputRef} maxLength={70} accept="image/*" id="photos" type="file" multiple name="photos[]" className="hidden" />
                        <div onClick={() => fileInputRef.current?.click()} className="form-input py-2 pt-3 px-3 cursor-pointer">
                            <button type="button" className="text-gray-700">انتخاب فایل <span className="text-sm">({state.photos.length} از 10)</span></button>
                        </div>
                    </div>
                </div>
                <FilesList files={state.photos} onRemoveFile={handleRemoveFile}/>
                <FormSubtitle text="توضیحات تکمیلی">
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M24,24H12.018A12,12,0,1,1,24,11.246l0,.063ZM12.018,2a10,10,0,1,0,0,20H22V11.341A10.018,10.018,0,0,0,12.018,2Z"/><rect x="7" y="7" width="6" height="2"/><rect x="7" y="11" width="10" height="2"/><rect x="7" y="15" width="10" height="2"/></g></svg>
                </FormSubtitle>
                <div className="col-span-full">
                    <FormControl>
                        <label  className="text-gray-600 mb-2">شیوه تعیین قیمت *</label>
                        <RadioGroup
                            row
                            name="controlled-radio-buttons-group"
                            value={state.ad.pricing_type}
                            onChange={e => setAdInfo('pricing_type', e.target.value as pricingType)}
                        >
                            <FormControlLabel value="price" control={<Radio />} label="قیمت پیشنهادی خودم" />
                            <FormControlLabel value="negotiation" control={<Radio />} label="توافقی" />
                            <FormControlLabel value="trade-off" control={<Radio />} label="معاوضه" />
                        </RadioGroup>
                    </FormControl>
                </div>
                {state.ad.pricing_type === 'price' && (
                    <Input id="price" label="قیمت کالا *" type="text" onChange={e => setAdInfo('price', Number(e.target.value) || null)} maxLength={9} minLength={5} name="price" className="ltr py-2 pt-3 px-3">
                        {typeof state.ad.price === 'number' && state.ad.price > 0 && (<span className="px-4 sticky left-0">{new Intl.NumberFormat('fa-IR').format(state.ad.price)} تومان</span>)}
                    </Input>
                )}
                <TextArea label='توضیحات آگهی *' onChange={e => setAdInfo('description', e.target.value)} maxLength={600} id="description" name="description"/>
                <FormSubtitle text="اطلاعات تماس">
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z"/></svg>
                </FormSubtitle>
                <Input label='شماره تلفن' onChange={e => setAdInfo('phone_number', e.target.value)} id="phone_number" type="text" name="phone_number" className="ltr py-2 pt-3 px-3" placeholder="مثال:‌ 09121234567">
                    <div className="w-full flex items-center mt-2 px-2">
                        <label className="text-gray-700 font-bold text-xs cursor-pointer" htmlFor="sms-only">فقط از طریق پیامک پاسخگو هستم.</label>
                        <Checkbox id="sms-only" color="default" size="small"/>
                    </div>
                </Input>
                <Input label='تلفن ثابت' id="address_line" type="address_line" name="address_line" className="ltr py-2 pt-3 px-3" placeholder="همراه با کد استان"/>
                <FormSubtitle text="تحویل کالا">
                    <svg className="ml-2" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m21 0h-18a3 3 0 0 0 -3 3v21h24v-21a3 3 0 0 0 -3-3zm1 3v2h-7v-3h6a1 1 0 0 1 1 1zm-11-1h2v6h-2zm-8 0h6v3h-7v-2a1 1 0 0 1 1-1zm-1 20v-15h7v3h6v-3h7v15zm13-4h5v2h-5z"/></svg>
                </FormSubtitle>
                <FormControl>
                    <label  className="text-gray-600">نوع تحویل *</label>
                    <RadioGroup
                        row
                        name="controlled-radio-buttons-group"
                        value={state.ad.delivery_type.toString()}
                        onChange={e => setAdInfo('delivery_type', Number(e.target.value))}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="حضوری" />
                        {/* <span className="text-sm inline-block">تحویل در شهر خودم</span> */}
                        <FormControlLabel value="2" control={<Radio />} label="غیرحضوری" />
                        {/* <span className="text-sm inline-block">ارسال به شهر دیگران</span> */}
                        <FormControlLabel value="3" control={<Radio />} label="هر دو" />
                    </RadioGroup>
                </FormControl>
                {state.ad.delivery_type !== 2 && (
                    <TextArea label='منطقه محل تحویل' onChange={e => setAdInfo('address', e.target.value)} id="address" name="address" />
                )}
            </yupFormContext.Provider>
            <div className="col-span-full flex justify-center">
                <button type='submit' className="text-lg duration-300 text-white bg-emerald-700 py-1 px-3 rounded-md border border-b-4 border-b-emerald-900/90 w-fit">
                    {submitting ? 'در حال ارسال' : 'ثبت آگهی'}
                </button>
            </div>
        </form>
    );
}
 
export default CreateAdForm;