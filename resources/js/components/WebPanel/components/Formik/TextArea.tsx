import { FC, ReactNode, useContext } from "react";
import FormSection from "../FormSection";
import { useField } from "formik";
import { formGeneralErrorsContext } from "../../context/formContext";

interface TextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    name: string,
    children?: ReactNode
}

type TextAreaPropsFinal = TextAreaProps & ({id?: string, label?: undefined} | {label: string, id: string})

const TextArea: FC<TextAreaPropsFinal> = ({className, children, ...props}) => {
    const [field, {error, touched}] = useField(props);
    const displayErrors = useContext(formGeneralErrorsContext)
    const hasErrors = (displayErrors || touched) && error
    return (
        <FormSection className={`col-span-full ${hasErrors ? 'text-red-600' : 'text-gray-600'}`} label={props.label ? { for: props.id, text: `${props.label}${props.required ? ' *' : ''}` } : undefined}>
            <textarea className={`form-textarea ${hasErrors && 'invalid'} ${className}`} {...field}/>
            {hasErrors && (
                <div className="text-red-600 my-2 text-sm">
                    {error}
                </div>
            )}
            {children}
        </FormSection>
    );
}
 
export default TextArea;