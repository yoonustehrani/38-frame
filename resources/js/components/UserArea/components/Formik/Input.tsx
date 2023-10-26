import { FC, ReactNode, useContext } from "react";
import FormSection from "../FormSection";
import { useField } from "formik";
import { formGeneralErrorsContext } from "../../../WebPanel/context/formContext";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name: string,
    formSectionClassName?: string
    children?: ReactNode 
}

type InputPropsFinal = InputProps & ({id?: string, label?: undefined} | {label: string, id: string})

const Input: FC<InputPropsFinal> = ({className, formSectionClassName, children, ...props}) => {
    const [field, {error, touched}] = useField(props);
    const displayErrors = useContext(formGeneralErrorsContext)
    const hasErrors = (displayErrors || touched) && error
    return (
        <FormSection required={!!props.required} className={`${hasErrors ? 'text-red-600' : 'text-gray-600'} ${formSectionClassName}`} label={props.label ? { for: props.id, text: props.label } : undefined}>
            <input className={`form-input ${hasErrors ? 'invalid' : ''} ${className}`} {...field} {...props}/>
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