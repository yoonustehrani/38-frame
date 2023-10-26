import { FC, ReactNode, useMemo, useRef, useState } from "react";
import useYupValidation from "../../../UserArea/hooks/useYupValidation";
import FormSection from "../FormSection";

interface TextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    name: string,
    children?: ReactNode
}

type TextAreaPropsFinal = TextAreaProps & ({id?: string, label?: undefined} | {label: string, id: string})

const TextArea: FC<TextAreaPropsFinal> = ({className, children, ...props}) => {
    const ref = useRef<HTMLTextAreaElement>(null)
    const [touched, setTouched] = useState(false)
    const validation = useYupValidation(props.name, ref.current?.value)
    const hasErrors = touched && validation && validation.errors.length
    return (
        <FormSection className={`col-span-full ${hasErrors ? 'text-red-600' : 'text-gray-600'}`} label={props.label ? { for: props.id, text: `${props.label}${props.required ? ' *' : ''}` } : undefined}>
            <textarea ref={ref} className={`form-textarea ${hasErrors && 'invalid'} ${className}`} onBlur={() => !touched && setTouched(true)} {...props}/>
            {hasErrors && (
                <div className="text-red-600 my-2 text-sm">
                    {validation.errors.map(e => (<span key={e}>{e}</span>))}
                </div>
            )}
            {children}
        </FormSection>
    );
}
 
export default TextArea;