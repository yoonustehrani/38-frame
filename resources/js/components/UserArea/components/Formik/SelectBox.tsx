import { FC, ReactNode, useContext } from "react";
import FormSection from "../FormSection";
import { useField } from "formik";
import { formGeneralErrorsContext } from "../../../WebPanel/context/formContext";

interface SelectBoxProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    name: string,
    options: {
        value: any
        text: string
    }[]
    formSectionClassName?: string
    children?: ReactNode 
}

type SelectBoxPropsFinal = SelectBoxProps & ({id?: string, label?: undefined} | {label: string, id: string})

const SelectBox: FC<SelectBoxPropsFinal> = ({className, formSectionClassName, children, options, ...props}) => {
    const [field, {error, touched}] = useField(props);
    const displayErrors = useContext(formGeneralErrorsContext)
    const hasErrors = (displayErrors || touched) && error
    return (
        <FormSection required={!!props.required} className={`${hasErrors ? 'text-red-600' : 'text-gray-600'} ${formSectionClassName}`} label={props.label ? { for: props.id, text: props.label } : undefined}>
            <select className={`form-input py-1 pt-3 px-3 ${hasErrors ? 'invalid' : ''} ${className}`} {...field} {...props}>
                <option value={''} disabled>{props.placeholder ?? 'انتخاب کنید'}</option>
                {options.map((o, i) => (
                    <option key={i} value={o.value}>{o.text}</option>
                ))}
            </select>
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
 
export default SelectBox;