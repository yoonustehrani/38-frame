import { FC, useContext, useState } from "react";
import { File } from "./types";
import SelectableFile from "./components/SelectableFile";
import { FileOverLayContext } from "../AttachFile/context";

interface SelectTabProps {
    files: File[]
    multiSelect: boolean
    handleSelect: (files: any) => void
}
 
const SelectTab: FC<SelectTabProps> = ({files, multiSelect, handleSelect}) => {
    const [selected, setSelected] = useState<number[]>([])
    const {hide} = useContext(FileOverLayContext)

    function select(payload: number) {
        if (multiSelect) {
            return setSelected(prevSelect => ([...prevSelect, payload]))
        }
        setSelected([payload])
    }

    function remove(payload: number) {
        if (multiSelect) {
            setSelected(prevSelect => prevSelect.filter(x => x !== payload))
        } else {
            setSelected([])
        }
    }
    function handleFinalSelect() {
        let finalFiles = multiSelect ? files.filter(x => selected.includes(x.id)) : files.find(x => x.id === selected[0])
        handleSelect(finalFiles)
        hide()
    }

    return (
        <div className="w-full grow flex flex-col justify-between px-3">
            <div className="w-full p-6 gap-4 md:gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
                {files.map(file => (
                    <SelectableFile remove={remove} select={select} selected={selected.includes(file.id)} key={file.id} {...file}/>
                ))}
                
            </div>
            {selected.length > 0 && (
                <div className="px-8 py-3 border-t border-black/10 flex justify-between">
                    <span>{`${selected.length} مورد انتخاب شده است.`}</span>
                    <button onClick={handleFinalSelect} type="button" className="duration-300 text-gray-700 hover:text-gray-900">{`انتخاب نهایی`}</button>
                </div>
            )}
        </div>
    );
}
 
export default SelectTab;