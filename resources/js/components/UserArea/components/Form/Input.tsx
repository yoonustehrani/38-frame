import { FC, ReactNode, useMemo, useRef, useState } from "react";
import useYupValidation from "../../hooks/useYupValidation";
import FormSection from "../FormSection";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name: string,
    children?: ReactNode    
}

type InputPropsFinal = InputProps & ({id?: string, label?: undefined} | {label: string, id: string})

const Input: FC<InputPropsFinal> = ({className, children, ...props}) => {
    const ref = useRef<HTMLInputElement>(null)
    const [touched, setTouched] = useState(false)
    const validation = useMemo(() => {
        return touched && useYupValidation(props.name, ref.current?.value)
    }, [ref.current?.value])
    const hasErrors = validation && validation.errors.length
    return (
        <FormSection className={`${hasErrors ? 'text-red-600' : 'text-gray-600'}`} label={props.label ? { for: props.id, text: props.label } : undefined}>
            <input ref={ref} className={`form-input ${hasErrors && 'invalid'} ${className}`} onBlur={() => !touched && setTouched(true)} {...props}/>
            {hasErrors && (
                <div className="text-red-600 my-3 text-sm">
                    {validation.errors.map(e => (<span key={e}>{e}</span>))}
                </div>
            )}
            {children}
        </FormSection>
    );
}
 
export default Input;