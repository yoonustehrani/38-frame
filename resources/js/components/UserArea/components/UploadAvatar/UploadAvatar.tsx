import { useField } from "formik";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface UploadAvatarProps {
    inputName: string;
    setAvatar: (avatar: string) => void;
    submit: (() => Promise<void>) & (() => Promise<any>);
    children?: ReactNode;
}

interface UploadingFile {
    file: File,
    allowed: boolean,
    src: string
    name: string
    sizeInKb: number
}

const UploadAvatar: FC<UploadAvatarProps> = ({inputName, children, submit}) => {
    const [avatarInput, {touched}, {setValue: setAvatar}] = useField({name: inputName})
    const [uploadingFile, setUploadingFile] = useState<UploadingFile>()
    const fileInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (uploadingFile) {
            setAvatar(uploadingFile.file).then(() => {
                submit().then(res => {
                    setUploadingFile(undefined)
                })
            })
        }
    },[uploadingFile])

    function handleFileChoose(e: React.MouseEvent<HTMLDivElement>): void {
        e.preventDefault()
        fileInput.current?.click()
    }
    const handleAttachFile: React.ChangeEventHandler<HTMLInputElement> = e => {
        if (! e.target.files || e.target.files.length < 1) return;
        // || state.photos.length + e.target.files.length > 10
        let file = e.target.files[0]
        let sizeInKb = file.size / 1024
        setUploadingFile({
            file: file,
            allowed: sizeInKb <= 500,
            src: URL.createObjectURL(file),
            name: file.name,
            sizeInKb
        })
    }
    const handleRemoveFile: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault()
        e.stopPropagation()
        if (! uploadingFile) return;
        setUploadingFile(undefined)
        setTimeout(() => {
            URL.revokeObjectURL(uploadingFile.src)
        }, 1000);
    }
    return (
        <div onClick={handleFileChoose} className="h-32 w-32 ring-4 ring-x-yellow ring-opacity-30 rounded-full cursor-pointer bg-slate-100 relative">
            <input onClick={e => e.stopPropagation()} onChange={handleAttachFile} style={{ display: 'none' }} type="file" accept="image/jpeg,image/jpg,image/png,image/webp" ref={fileInput}/>
            {uploadingFile && (
                <>
                    <div className="h-full w-full rounded-full overflow-hidden">
                        <img className="h-full w-full" src={uploadingFile.src} alt="" />
                    </div>
                    <button onClick={handleRemoveFile} type="button" className="absolute grid place-content-center z-20 top-0 left-0 bg-red-500 w-8 h-8 rounded-full p-2 fill-white">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" className="fill-inherit" width="24" height="24"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
                    </button>
                </>
            )}
            {!uploadingFile && (
                <div className="h-full w-full rounded-full overflow-hidden grid place-content-center">
                    {children}
                </div>
            )}
        </div>
    ); 
}
 
export default UploadAvatar;