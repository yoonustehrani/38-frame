import { FC, useEffect, useRef, useState, useTransition } from "react";
import { uploadFiles } from "../api";
import { File as UploadedFile } from "../types";

interface UploadTabProps {
    multiple: boolean
    addFile: (file: UploadedFile) => void
}

interface FileInQueue {
    file: File,
    allowed: boolean,
    src: string,
    name: string,
    sizeInKb: number,
    uploading: boolean
}

const UploadTab: FC<UploadTabProps> = ({multiple, addFile}) => {
    const [isPending, startTransition] = useTransition()
    const [queue, setQueue] = useState<FileInQueue[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleAttachFiles: React.ChangeEventHandler<HTMLInputElement> = e => {
        if (! e.target.files) {
            return
        }
        let pickedFiles = e.target.files
        let uploadingFiles: FileInQueue[] = Array.from(pickedFiles).map(file => {
            let sizeInKb = file.size / 1024
            return {
                file: file,
                allowed: sizeInKb <= 500,
                src: URL.createObjectURL(file),
                name: file.name,
                sizeInKb,
                uploading: true
            }
        })
        setQueue(uploadingFiles)
        startTransition(() => {
            let data = new FormData()
            uploadingFiles.forEach(f => {
                data.append('files[]', f.file)
            })
            const [uploadFilesToServer, cancel] = uploadFiles(data)
            uploadFilesToServer.then(res => {
                if (! res.hasErrors()) {
                    try {
                        res.getContent<UploadedFile[]>().forEach(f => {
                            addFile(f)
                        })
                    } catch (error) {
                        
                    } finally {
                        setQueue(prevState => ([]))
                    }
                }
            })
        })
    }

    return (
        <div className="px-4 py-6 flex flex-col justify-center items-center">
            <div className="relative md:w-1/2">
                <label htmlFor="photos" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">فایل ها *</label>
                <input onChange={handleAttachFiles} ref={fileInputRef} maxLength={70} accept="image/*" id="files" type="file" multiple={multiple} name="files[]" className="hidden" />
                <div onClick={() => fileInputRef.current?.click()} className="form-input text-center py-2 pt-3 px-3 cursor-pointer">
                    <button type="button" className="text-gray-700">انتخاب فایل <span className="text-xs">
                        ({! multiple ? 'آپلود تکی' : 'آپلود چندتایی'})
                        </span></button>
                </div>
            </div>
            <div className="w-full flex flex-wrap gap-4 mt-6">
                {queue?.map(f => (
                    <div key={f.src} className="relative w-40 flex flex-col items-center justify-between h-auto aspect-square overflow-hidden border border-black/10 shadow-md pb-2 rounded-md">
                        <img className="w-full" src={f.src}/>
                        <span className="text-xs text-center px-2">{f.name}</span>
                        {isPending && (
                            <div className="absolute flex items-center justify-center w-full h-full bg-black/70 text-gray-400">
                                در حال آپلود
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default UploadTab;