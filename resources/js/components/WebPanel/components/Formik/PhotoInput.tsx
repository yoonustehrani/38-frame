import { useCallback } from "react";
import Input from "./Input";
import { useField } from "formik";
import FilePreview from "../FilePreview";
import ImageIcon from "../../../Icons/ImageIcon";
import XIcon from "../../../Icons/XIcon";

interface PhotoInputProps {
    name: string
    id: string
    label: string
}

function PhotoInput({ name, id, label }: PhotoInputProps) {
    const [fileField, {}, {setValue: setFileValue}] = useField({ name })
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) setFileValue(e.currentTarget.files[0]);
    }, [])
    function handleRemoveFile () {
        setFileValue(undefined)
    }
    const hasFile = fileField.value instanceof File
    return (
        <div className="relative w-48 h-48 bg-slate-200 rounded-md flex flex-col items-center justify-center">
            <Input id={id} name={name} onChange={handleChange} className="hidden" type="file" accept="image/jpeg,image/png,image/webp,image/jpg"/>
            {hasFile && (
                <>
                    <FilePreview file={fileField.value}/>
                    <button onClick={handleRemoveFile} type="button" className="absolute bg-red-500 rounded-full -top-3 -right-3 h-8 w-8 z-30 grid place-content-center">
                        <XIcon width={24} height={24}/>
                    </button>
                </>
            )}
            <label onClick={e => e.stopPropagation()} className={`${hasFile ? 'opacity-0 z-10 hover:opacity-100 bg-black/80 text-gray-400 fill-gray-400' : ''} duration-300 h-full absolute cursor-pointer text-sm flex flex-col justify-center items-center gap-2 w-full p-1`} htmlFor={id}>
                <ImageIcon height={40} width={40}/>
                {hasFile ? 'تغییر' : 'انتخاب'} {label}
            </label>
        </div>
    );
}

export default PhotoInput;