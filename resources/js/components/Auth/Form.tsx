import { useMemo, useRef, useState } from "react"
import ActionButton from "./ActionButton"
import ArrowIcon from "../Icons/ArrowIcon"

interface FormProps {
    dispatch: React.Dispatch<CredentialsAction>
    credentials: AuthFormState
    loading: boolean
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

const Form: React.FC<FormProps> = ({dispatch, credentials, loading}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [stage, setStage] = useState<'email' | 'password'>('email')
    const handleActionButtonClick = () => {
        if (inputRef.current === null) return
        const actionType = 'SET_' + stage.toUpperCase() as CredentialsAction['type']
        dispatch({type: actionType, payload: inputRef.current.value})
        switch (stage) {
            case 'email':
                inputRef.current.value = ''
                setStage('password')
                break;
        }
    }
    return (
        <div className="flex flex-col w-full lg:w-4/5 px-2 gap-2">
            <label htmlFor={stage} className="text-white">{stage == 'email' ? 'ایمیل یا شماره تلفن' : 'رمز عبور'} :</label>
            <input 
                ref={inputRef}
                disabled={loading}
                id={stage}
                key={stage}
                className="text-left input bg-slate-50 hover:outline-none [direction:ltr] placeholder-shown:[direction:rtl] placeholder:text-right shadow-md w-full py-3 px-4"
                {...inputData[stage]}
                defaultValue={credentials[stage] ?? ''}
            />
            <div className="grid grid-rows-1 grid-flow-col">
                {loading ? (
                    <ActionButton disabled={loading} handleWith={handleActionButtonClick} className={stage === 'email' ? 'rounded-lg' : 'rounded-l-lg'} text={'در حال ارسال ...'} />
                ) : (
                    <>
                        {stage === 'password' && (
                            <ActionButton disabled={loading} handleWith={() => {
                                dispatch({type: 'SET_PASSWORD', payload: ''})
                                setStage('email')
                            }} className="rounded-r-lg border-l-2 border-black/10" text="بازگشت">
                                <ArrowIcon to="right" size={30} className={loading ? 'fill-gray-500' : ''}/>
                            </ActionButton>
                        )}
                        <ActionButton disabled={loading} handleWith={handleActionButtonClick} className={stage === 'email' ? 'rounded-lg' : 'rounded-l-lg'} text={stage === 'password' ? 'ارسال' : 'ادامه'}>
                            <ArrowIcon to="left" size={30} className={loading ? 'fill-gray-500' : ''}/>
                        </ActionButton>
                    </>
                )}
                
            </div>
        </div>
    );
}
 
export default Form;