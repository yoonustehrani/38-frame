import { createRef, useRef } from "react";
import Input from "./Input";

interface FileInputProps {
    name: string
}

function FileInput({ name }: FileInputProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <Input name={name} onChange={(e) => {
            console.log(e);
        }} innerRef={inputRef}>
            <button type="button" onClick={() => {
                console.log(inputRef);
                
                // inputRef.current?.click
            }}>انتخاب</button>
        </Input>
    );
}

export default FileInput;