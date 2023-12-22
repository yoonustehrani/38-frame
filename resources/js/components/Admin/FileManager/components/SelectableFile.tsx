import { FC, useEffect, useRef } from "react";
import { File } from "../types";

interface SelectableFileProps extends File {
    selected: boolean
    select: (id: number) => void
    remove: (id: number) => void
}
 
const SelectableFile: FC<SelectableFileProps> = ({type, id, filename, uri, thumbnailUri, selected, select, remove}) => {
    function handleToggle() {
        selected ? remove(id) : select(id)
    }
    return (
        <div className="w-fit h-auto aspect-square flex justify-center items-center overflow-hidden relative">
            {type === 'image' && thumbnailUri && (
                <img src={thumbnailUri} className="w-full sticky h-auto flex flex-col items-center justify-between aspect-square overflow-hidden border border-black/10 shadow-md rounded-md"/>
            )}
            <div onClick={handleToggle} className={`grid absolute cursor-pointer w-full h-full ${selected ? `bg-black/60 text-slate-400` : `bg-transparent text-transparent hover:bg-black/60 hover:text-slate-400`} place-content-center font-bold`}>
                {selected ? 'انتخاب شده' : 'انتخاب'}
            </div>
        </div>
    );
}
 
export default SelectableFile;