import { FC, useLayoutEffect, useReducer, useRef, useState } from "react";
import { fetchFiles } from "./api";
import { File } from "./types";
import SelectTab from "./SelectTab";
import UploadTab from "./components/UploadTab";

interface FileManagerProps {
    multiSelect: boolean,
    handleSelect: (files: any) => void
}

type Action = {type: string, payload?: any}

function FileManagerReducer (files: File[], action: Action): File[] {
    switch (action.type) {
        case 'SET_FILES':
            return action.payload as File[]
        case 'ADD_FILES':
            return [...files, ...action.payload as File[]]
        case 'ADD_FILE':
            return [action.payload as File, ...files]
        case 'REMOVE_FILE':
            return files.filter(x => x.id !== action.payload)
        default:
            return files
    }
}

const buttonClass = "p-3 font-bold text-gray-500 bg-gray-100 hover:text-sky-500 disabled:bg-white disabled:text-gray-700"

const FileManager: FC<FileManagerProps> = (props) => {
    const elementRef = useRef<HTMLDivElement>(null)
    const [files, dispatchFiles] = useReducer(FileManagerReducer, []);
    const [tab, setTab] = useState<'select' | 'upload'>('select')

    // TODO: fix auto close
    // useEffect(() => {
    //     if (elementRef.current) {
    //         document.addEventListener('click', function(e): any {
    //             // ! elementRef.current?.contains(e.target as Node) && hide()
    //         })
    //     }
    // }, [])

    useLayoutEffect(() => {
        const [requestFiles, cancel] = fetchFiles('type=image&limit=20')
        requestFiles.then(response => {
            if (! response.hasErrors()) {
                dispatchFiles({type: 'SET_FILES', payload: response.getContent<File[]>()})
            }
        })
        return cancel
    }, [])
    function add(file: File) {
        dispatchFiles({type: 'ADD_FILE', payload: file})
    }
    function remove(fileId: number) {
        dispatchFiles({type: 'REMOVE_FILE', payload: fileId})
    }
    return (
        <div ref={elementRef} className="bg-white flex flex-col w-full h-5/6 border border-black/10 rounded-b-md rounded-tl-md overflow-hidden shadow-md">
            <div className="grid grid-cols-2 grow-0">
                <button onClick={() => setTab('select')} disabled={tab == 'select'} className={buttonClass} type="button">انتخاب</button>
                <button onClick={() => setTab('upload')} disabled={tab == 'upload'} className={buttonClass} type="button">آپلود</button>
            </div>
            {tab === 'select' && <SelectTab files={files} {...props}/>}
            {tab === 'upload' && <UploadTab addFile={add} multiple={props.multiSelect}/>}
        </div>
    )
}
 
export default FileManager;