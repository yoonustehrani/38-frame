import { FC, useState } from "react";
import Input from "../../../../components/Formik/Input";
import TextArea from "../../../../components/Formik/TextArea";
import { FormControl, FormControlLabel, Radio, RadioGroup, ThemeProvider, createTheme } from "@mui/material";
import SelectBox from "../../../../components/Formik/SelectBox";

interface GeneralDataFormProps {}
 
const GeneralDataForm: FC<GeneralDataFormProps> = () => {
    const [inShop, setInShop] = useState(false)
    return (
        <>
            <Input required type="text" name="brand" id="brand" label="نام / برند فروشگاه" className="py-2 px-3"/>
            <Input required type="number" name="founded_in_year" id="year" label="سال شروع فعالیت" className="ltr py-2 px-3" min={1320} max={1402}/>
            <SelectBox required name="category" id="category" className="form-input py-1 pt-3 px-3" label='نوع فروشگاه' placeholder="نوع فروشگاه خود را مشخص کنید"
                options={[
                    {value: 1, text: 'فروشگاه تخصصی لوازم عکاسی'},
                    {value: 2, text: 'فروشگاه تخصصی عکاسی آنالوگ'},
                    {value: 3, text: 'فروشگاه شخصی / فروشگاه خانگی'},
                    {value: 4, text: 'فروشگاه مجازی / فروشگاه اینستاگرامی'}
                ]}
            />
            <TextArea required name="bio" id="bio" label="بیوگرافی / معرفی فروشگاه" className="py-4 px-3"/>
            <ThemeProvider theme={createTheme({typography: {fontFamily: 'IranSansWeb',},})}>
                <FormControl>
                    <label className="text-gray-600 mb-2">آیا امکان فروش حضوری کالا دارید ؟</label>
                    <RadioGroup
                        name="controlled-radio-buttons-group"
                        value={inShop ? 'yes' : 'no'}
                        onChange={e => setInShop(e.target.value === 'yes')}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="بله" />
                        <FormControlLabel value="no" control={<Radio />} label="خیر" />
                    </RadioGroup>
                </FormControl>
            </ThemeProvider>
            {inShop && <TextArea required name="address" id="address" label="آدرس دقیق فروشگاه" className="py-4 px-3"/>}
        </>
    );
}
 
export default GeneralDataForm;