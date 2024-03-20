import { FC, ReactNode, useContext } from "react";
import FormSection from "../FormSection";
import { useField } from "formik";
import { formGeneralErrorsContext } from "../../context/formContext";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name: string,
    formSectionClassName?: string
    children?: ReactNode
    innerRef?: React.RefObject<HTMLInputElement>
}

type InputPropsFinal = InputProps & ({id?: string, label?: undefined} | {label: string, id: string})

const Input: FC<InputPropsFinal> = ({className, formSectionClassName, children, innerRef, ...props}) => {
    const [field, {error, touched}] = useField(props);
    const displayErrors = useContext(formGeneralErrorsContext)
    const hasErrors = (displayErrors || touched) && error
    let prop = Object.freeze({...field, value: props.type === 'file' ? '' : field.value})
    return (
        <FormSection required={!!props.required} className={`${hasErrors ? 'text-red-600' : 'text-gray-600'} ${formSectionClassName}`} label={props.label ? { for: props.id, text: props.label } : undefined}>
            <input ref={innerRef} className={`form-input ${hasErrors ? 'invalid' : ''} ${className}`} {...prop} {...props}/>
            {hasErrors && (
                <div className="text-red-600 my-3 text-sm">
                    {error}
                    {/* {validation.errors.map(e => (<span key={e}>{e}</span>))} */}
                </div>
            )}
            {children}
        </FormSection>
    );
}
 
export default Input;