import { FC, ReactNode, useState } from "react";
import FileManager from "../FileManager/FileManager";
import { FileOverLayContext } from "./context";
import { File } from "../FileManager/types";

type AttachFileProps = {
    children: ReactNode
    className: string
} & ({
    multiSelect: true,
    onSelect: (files: File[]) => void
} | {
    multiSelect: false,
    onSelect: (file: File) => void
})
 
const AttachFile: FC<AttachFileProps> = ({multiSelect, onSelect, children, className}) => {
    const [display, setDisplay] = useState(false)
    return (
        <FileOverLayContext.Provider value={{ 
            show: () => setDisplay(true),
            hide: () => setDisplay(false),
            toggle: () => setDisplay(prevState => ! prevState)
         }}>
            <div className={className}>
                <div className={`fixed z-40 ${display ? '' : 'hidden'} top-0 left-0 w-full h-screen px-12 py-6`}>
                    <div className="flex justify-start">
                        <button type='button' role="button" onClick={() => setDisplay(false)} className="bg-red-50 text-red-500 text-sm py-1 px-4 rounded-t-md">بستن</button>
                    </div>
                    <FileManager multiSelect={multiSelect} handleSelect={onSelect}/>
                </div>
                {children}
            </div>
        </FileOverLayContext.Provider>
    );
}
 
export default AttachFile;