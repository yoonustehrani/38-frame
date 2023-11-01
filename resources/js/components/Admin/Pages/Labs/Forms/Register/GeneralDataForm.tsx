import { FC, useContext, useLayoutEffect, useState } from "react";
import Input from "../../../../../WebPanel/components/Formik/Input";
import TextArea from "../../../../../WebPanel/components/Formik/TextArea";
import { FormControl, FormControlLabel, Radio, RadioGroup, Switch, ThemeProvider, createTheme } from "@mui/material";
import SelectBox from "../../../../../WebPanel/components/Formik/SelectBox";
import FormSection from "../../../../../WebPanel/components/FormSection";
import { useField } from "formik";
import CityComboBox from "../../../../../Labs/components/CityComboBox";
import authContext from "../../../../../WebPanel/context/authContext";
import useAuth from "../../../../../WebPanel/hooks/useAuth";
import { fetchLabTypeCategories } from "../../api";

interface GeneralDataFormProps {}

interface LabCategory {
    id: number
    name: string
    label: string
}

const GeneralDataForm: FC<GeneralDataFormProps> = () => {
    const Auth = useAuth()
    const [categories, setCategories] = useState<LabCategory[]>()
    const [activeField] = useField({ name: 'active', type: 'checkbox', defaultChecked: true })
    const [cityIdField, cityIdmeta, cityIdHelpers] = useField({ name: 'city_id', type: 'number' })
    useLayoutEffect(() => {
        const [response, cancel] = fetchLabTypeCategories()
        response.then(r => {
            if (! r.hasErrors()) {
                setCategories(r.getContent<LabCategory[]>())
            }
        })
        return cancel
    })
    return (
        <>
            <Input required type="text" name="brand" id="brand" label="نام / برند لابراتوار" className="py-2 px-3"/>
            <div>
                <label htmlFor="active" className="text-gray-700 text-sm">فعال است</label>
                <Switch className="inline" id="active" {...activeField}/>
            </div>
            <Input required type="number" name="founded_in_year" id="year" label="سال شروع فعالیت" className="ltr py-2 px-3" min={1320} max={1402}/>
            {categories && (
                <SelectBox required name="category_id" id="category_id" className="form-input py-1 pt-3 px-3" label='نوع لابراتوار' placeholder="نوع لابراتوار خود را مشخص کنید"
                    options={categories.map(x => ({value: x.id, text: x.label}))} />
            )}
            <TextArea required name="bio" id="bio" label="بیوگرافی / معرفی لابراتوار" className="py-4 px-3"/>
            <FormSection className="col-span-full" label={{ for: 'cityid', text: 'موقعیت مکانی' }}>
                <CityComboBox cityId={cityIdField.value ?? Auth.user?.city_id} setCityId={id => cityIdHelpers.setValue(id)}/>
            </FormSection>
            <TextArea name="address" id="address" label="آدرس دقیق لابراتوار" className="py-4 px-3"/>
        </>
    );
}
 
export default GeneralDataForm;