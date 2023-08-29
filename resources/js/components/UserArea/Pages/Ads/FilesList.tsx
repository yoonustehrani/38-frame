import { FC } from "react";
import { UploadingFiles } from "./types";

interface FilesListProps {
    files: UploadingFiles[]
    onRemoveFile: React.MouseEventHandler<HTMLButtonElement>
}
 
const FilesList: FC<FilesListProps> = ({files, onRemoveFile}) => {
    return files.length > 0 && (
        <div className="col-span-full flex flex-wrap gap-4 py-4">
            {files.map(({src, name, sizeInKb, allowed}) => (
                <div key={src} className={`relative ring-2 ${allowed ? 'ring-x-green ring-opacity-20' : 'ring-red-500'} w-40 overflow-hidden rounded-md flex flex-col items-center justify-center gap-2 p-2`}>
                    <button type="button" className="bg-red-500 bg-opacity-50 hover:bg-opacity-100 duration-500 text-slate-50 absolute rounded-full text-xs px-2 py-1 left-1 top-1" onClick={onRemoveFile} data-src={src}>حذف</button>
                    {! allowed && <span className="bg-red-600 bg-opacity-80 text-slate-50 absolute rounded-full text-xs px-2 py-1 mx-2 text-center">حجم عکس بیش از 500 کیلوبایت است</span>}
                    <img className="h-auto w-full" src={src} alt={name} />
                    <span className="text-xs text-center">{name}</span>
                    <span className="text-xs text-center bg-gray-200 px-2 rounded-full">{Math.ceil(sizeInKb * 10) / 10} کیلوبایت</span>
                </div>
            ))}
        </div>
    );
}
 
export default FilesList;