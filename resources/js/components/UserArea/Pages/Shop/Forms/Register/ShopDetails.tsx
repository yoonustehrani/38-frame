import { FC, useEffect, useState } from "react";
import { useField } from "formik";
import Input from "../../../../components/Formik/Input";
import FormInput from "../../../../components/Form/Input";
//@ts-expect-error
import { findBankByIBAN } from '../../../../../../utils/GripHook/index.js';

interface ShopDetailsProps {
    
}
type Bank = {
    name: string
    name_farsi: string
    icon: string
    iban_nbc: string,
    pan_iin: string[]
}

const ShopDetails: FC<ShopDetailsProps> = () => {
    const [bank, setBank] = useState<Bank | undefined>()
    const [ibanField, ibanMeta, ibanHelpers] = useField({name: 'iban'})
    const getFormattedIBAN = (iban: string) => {
        let s = iban.slice(0, 2)
        if (iban.length > 2) {
            s += '-' + iban.slice(2).split(/(\d{4})/).filter(x => x.match(/[\d{1,4}]/)).join('-')
        }
        return s ?? ''
    }
    const getRawIban = (iban: string) => {
        return iban.trim().replace(/\-/g, '')
    }
    useEffect(() => {
        if (ibanField.value.length === 24) {
            setBank(findBankByIBAN('IR' + ibanField.value) as Bank)
        } else if(bank) {
            setBank(undefined)
        }
    }, [ibanField.value])

    return (
        <>
            <Input required type="text" name="owner_fullname" id="owner_fullname" label="نام مدیریت فروشگاه" className="py-2 px-3 h-full"/>
            <Input required type="text" maxLength={10} name="owner_national_id" id="owner_national_id" label="کد ملی مدیریت فروشگاه" className="ltr py-2 px-3 h-full"/>
            <Input type="text" maxLength={10} name="website" id="website" label="وب سایت فروشگاه" className="ltr py-2 px-3 h-full" placeholder="اگر وب سایت دارید اینجا وارد کنید"/>
            <div>
                <FormInput required {...ibanField.onBlur} onChange={e => ibanHelpers.setValue(getRawIban(e.target.value))} value={getFormattedIBAN(ibanField.value)} maxLength={30} type="text" name="iban" id="iban" label="شماره شبا معتبر" className="ltr py-2 pt-3 px-3 pl-9">
                    <div className="h-12 w-10 absolute left-0 top-0 flex justify-center items-center px-3">
                        <span className="leading-tight pt-1">IR</span>
                    </div>
                    {ibanMeta.error && (
                        <div className="text-red-600 my-2 text-sm">
                            {ibanMeta.error}
                        </div>
                    )}
                </FormInput>
                {bank?.name && (
                    <div className="text-gray-700 w-full flex items-end gap-3 py-3 px-2 fadeIn">
                        <img className="h-7" src={`/images/bank-icons/${bank.icon}`} alt="" />
                        <span className="text-sm font-bold">بانک {bank.name_farsi}</span>
                    </div>
                )}
            </div>
        </> 
    );
}
 
export default ShopDetails;