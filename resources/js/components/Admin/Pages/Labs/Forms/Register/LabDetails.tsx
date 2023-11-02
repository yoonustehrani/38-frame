import { FC, useMemo } from "react";
import { useField } from "formik";
import Input from "../../../../../WebPanel/components/Formik/Input";
import WorkingDays from "./components/WorkingDays";
import { WorkingDayInstance } from "./components/types";

interface LabDetailsProps {
    
}

const LabDetails: FC<LabDetailsProps> = () => {
    const [WDField, WDMeta, WDHelpers] = useField<WorkingDayInstance[]>({name: 'meta[workingDays]', defaultValue: []})
    const memoizedValue = useMemo(() => WDField.value, [])
    return (
        <>
            <Input required type="text" name="owner_fullname" id="owner_fullname" label="نام مدیریت لابراتوار" className="py-2 px-3 h-full"/>
            <Input type="text" maxLength={10} name="website" id="website" label="وب سایت لابراتوار" className="ltr py-2 px-3 h-full" placeholder="بدون http یا https"/>
            <div className="col-span-full">
                <hr className="mb-6" />
                <h3 className="font-bold text-gray-800 text-lg">روزهای کاری مجموعه</h3>
                <WorkingDays initialData={memoizedValue} handleChange={(data: WorkingDayInstance[]) => WDHelpers.setValue(data)}/>
            </div>
        </>
    );
}
 
export default LabDetails;