import { FC, useEffect, useState } from "react";
import Input from "../../../../../WebPanel/components/Formik/Input";
import TextArea from "../../../../../WebPanel/components/Formik/TextArea";
import SelectBox from "../../../../../WebPanel/components/Formik/SelectBox";
import { getMerchandiseCategories } from "../../api";
import ToastError from "../../../../../../utils/ToastError/ToastError";

interface SiteCategory {
    id: number
    label: string
}

interface GeneralDataFormProps {}
 
const GeneralMerchandiseData: FC<GeneralDataFormProps> = () => {
    const [categories, setCategories] = useState<SiteCategory[]>()
    useEffect(() => {
        const [request, cancel] = getMerchandiseCategories()
        request.then(res => {
            if (res.hasErrors()) return ToastError(res.getErrors())
            setCategories(res.getContent())
        })
        return cancel
    }, [])

    return (
        <>
            <Input required type="text" name="title" id="title" label="عنوان/نام کالا" className="py-2 px-3"/>
            <SelectBox required name="category_id" id="category_id" className="form-input py-1 pt-3 px-3" label='دسته بندی کالا' placeholder="نوع کالای خود را مشخص کنید"
                options={categories?.map(c => ({value: c.id, text: c.label})) || []}
            />
            <TextArea required name="description" id="description" label="توضیحات/معرفی کالا" className="py-4 px-3"/>
        </>
    );
}
 
export default GeneralMerchandiseData;