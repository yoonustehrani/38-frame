import { FC, useMemo } from "react";

interface FilePreviewProps {
    file: File
}
 
const FilePreview: FC<FilePreviewProps> = ({file}) => {
    const currentUrl: string = useMemo(() => URL.createObjectURL(file), [file])
    return (
        <div className="grid place-content-center place-items-center rounded-md overflow-hidden">
            <img className="w-auto max-w-full h-48" src={currentUrl} />
            {/* <button onClick={handleRemoveFile} type="button" className="absolute py-1 text-sm px-2 bg-red-300 text-red-800">حذف</button> */}
        </div>
    );
}
 
export default FilePreview;