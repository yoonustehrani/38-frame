// import { useField } from "formik";
import { ReactNode } from "react";
import FormSubtitle from "../../../../../WebPanel/components/FormSubtitle";
import MultiplePhotoInput from "../../../../../WebPanel/components/Formik/MultiplePhotoInput";
import PhotoInput from "../../../../../WebPanel/components/Formik/PhotoInput";

function UploadBox({title, children}: {title: string, children: ReactNode}) {
    return (
        <div className="col-span-full flex flex-col items-center justify-center gap-4 bg-slate-100 rounded-sm shadow-md p-3">
            <FormSubtitle className="text-lg" text={title}/>
            {children}
        </div>
    )
}

function Info({text}: {text: string}) {
    return (
        <span className="text-sm px-2 py-1 rounded-md text-sky-700 bg-sky-100">{text}</span>
    )
}

function MerchandiseImageUpload() {
    return (
        <>
            <UploadBox title="تصویر اصلی کالا">
                <span className="text-xs text-gray-700 text-center">می توانید با کلیک برروی باکس زیر عکس اصلی کالا را انتخاب کنید و یا تغییر دهید.</span>
                <Info text="فرمت های قابل قبول :‌ jpg, png, webp"/>
                <PhotoInput label="تصویر اصلی" id="avatar" name="avatar"/>
            </UploadBox>
            <UploadBox title="تصویر های دیگر کالا">
                <span className="text-xs text-gray-700 text-center">می توانید با کلیک برروی باکس زیر عکس های دیگری برای کالا اضافه و یا حذف کنید .</span>
                <Info text="فرمت های قابل قبول :‌ jpg, png, webp"/>
                <MultiplePhotoInput label="تصویر های دیگر" id="images" name="images"/>
            </UploadBox>
        </>
    );
}

export default MerchandiseImageUpload;