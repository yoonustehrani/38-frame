import { useRef, useState } from "react"
import ActionButton from "./ActionButton"

interface FormProps {
    dispatch: React.Dispatch<CredentialsAction>
}

const inputData = {
    email: {
        type: 'text',
        placeholder: "ایمیل یا شماره تلفن خود را وارد کنید."
    },
    password: {
        type: 'password',
        placeholder: "لطفا رمز عبور خود را وارد نمایید"
    }
}

const Form: React.FC<FormProps> = ({dispatch}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [stage, setStage] = useState<'email' | 'password'>('email')
    const [disabled, setDisabled] = useState(false)
    const handleActionButtonClick = () => {
        if (inputRef.current === null) return
        const actionType = 'SET_' + stage.toUpperCase() as CredentialsAction['type']
        setDisabled(true)
        dispatch({type: actionType, payload: inputRef.current.value})
        switch (stage) {
            case 'email':
                inputRef.current.value = ''
                setStage('password')
                setDisabled(false)
                break;
            case 'password':

                break;
        }
    }
    return (
        <div className="flex flex-col w-full lg:w-4/5 px-2 gap-2">
            <label htmlFor={stage} className="text-white">{stage == 'email' ? 'ایمیل یا شماره تلفن' : 'رمز عبور'} :</label>
            <input 
                ref={inputRef}
                disabled={disabled}
                id={stage}
                className="text-left input bg-slate-50 hover:outline-none [direction:ltr] placeholder-shown:[direction:rtl] placeholder:text-right shadow-md w-full py-3 px-4"
                {...inputData[stage]}
            />
            <ActionButton disabled={disabled} handleWith={handleActionButtonClick}/>
        </div>
    );
}
 
export default Form;