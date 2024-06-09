import { useCallback, useEffect, useState } from "react";
import Input from "./Input";
import { useField } from "formik";
import XIcon from "../../../Icons/XIcon";
import PlusIcon from "../../../Icons/PlusIcon";

interface MultiplePhotoInputProps {
    name: string
    id: string
    label: string
}

const fileUniqueKey = (file: File) => {
    return `${file.name}:${file.size}:${file.type}:${file.lastModified}`;
}

function MultiplePhotoInput({ name, id, label }: MultiplePhotoInputProps) {
    const [{value: filesArray}, {}, {setValue: setFileValue}] = useField<File[]>({name})
    const [photos, setPhotos] = useState<Map<string, {file: File, uri: string}>>(new Map)
    useEffect(() => {
        if (filesArray.length > 0 && photos.size === 0) {
            setFileValue([])
        } else if ( photos.size > 0 ) {
            setFileValue(Array.from(photos.values()).map(x => x.file))
        }
    }, [photos.size])
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            let newPhotos = new Map(photos)
            Array.from(e.currentTarget.files).forEach(f => {
                if (! newPhotos.has(fileUniqueKey(f))) {
                    newPhotos.set(fileUniqueKey(f), {file: f, uri: URL.createObjectURL(f)})
                }
            })
            setPhotos(newPhotos)
        }
    }, [photos])
    function handleRemoveFile (key: string) {
        if (photos.has(key)) {
            let newPhotos = new Map(photos)
            newPhotos.delete(key)
            setPhotos(newPhotos)
        }
    }
    const hasFile = photos.size > 0
    return (
        <div className="flex flex-wrap gap-2">
            <Input id={id} name={name} onChange={handleChange} multiple className="hidden" type="file" accept="image/jpeg,image/png,image/webp,image/jpg"/>
            {hasFile && (
                Array.from(photos.values()).map(photo => (
                    <div key={photo.uri} className="relative w-28 h-28 bg-slate-200 rounded-md flex flex-col items-center justify-center">
                        <img className="w-auto max-w-full h-48" src={photo.uri} />
                        <button onClick={() => handleRemoveFile(fileUniqueKey(photo.file))} type="button" className="absolute bg-red-500 rounded-full -top-3 -right-3 h-8 w-8 z-30 grid place-content-center">
                            <XIcon width={24} height={24}/>
                        </button>
                    </div>
                ))
            )}
            <div className="relative w-28 h-28 bg-slate-200 rounded-md flex flex-col items-center justify-center">
                <label onClick={e => e.stopPropagation()} className={`h-full absolute cursor-pointer text-sm flex flex-col justify-center items-center gap-3 w-full p-1`} htmlFor={id}>
                    <PlusIcon size={20}/>
                    {`افزودن`}
                </label>
            </div>
        </div>
        
    );
}

export default MultiplePhotoInput;