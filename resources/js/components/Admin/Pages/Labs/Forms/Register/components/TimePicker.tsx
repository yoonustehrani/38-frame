import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";

interface TimePickerProps {
    valid: boolean
    defaultTime: string | null
    onChange: (time:string) => void
}
 
const TimePicker: FC<TimePickerProps> = ({onChange, defaultTime, valid}) => {
    const [hours, setHours] = useState<number>(defaultTime ? Number(defaultTime.split(':')[0]) : 0)
    const [minutes, setMinutes] = useState<number>(defaultTime ? Number(defaultTime.split(':')[1]) : 0)
    const [dayMode, setDayMode] = useState<'am' | 'pm'>(hours > 11 ? 'pm' : 'am')
    
    const getHourValue = useCallback(() => {
        let hour = 0
        if (hours == 12 || hours == 0) {
            hour = 12
        } else {
            hour = dayMode === 'am' ? hours : hours - 12
        }
        return hour > 9 ? `${hour}` : `0${hour}`
    }, [hours, dayMode])

    function handleChangeHours(e: ChangeEvent<HTMLInputElement>) {
        let { valueAsNumber } = e.target
        switch (dayMode) {
            case 'am':
                if (valueAsNumber == 12) {
                    setHours(12)
                    setDayMode('pm')
                } else {
                    setHours(valueAsNumber)
                }
                break;
            case 'pm':
                if (valueAsNumber == 12) {
                    setHours(0)
                    setDayMode('am')
                } else {
                    setHours(valueAsNumber + 12)
                }
                break;
        }
    }
    useEffect(() => {
        switch (hours) {
            case 0:
                setHours(dayMode == 'am' ? 0 : 12)
                break;
            case 12:
                setHours(dayMode == 'am' ? 0 : 12)
                break;
            default:
                setHours(dayMode == 'am' ? (hours > 12 ? hours - 12 : hours) : (hours < 12 ? hours + 12 : hours))
                break;
        }
    }, [dayMode])
    useEffect(() => {
        let changeTimeout = setTimeout(() => {
            onChange(`${hours}:${minutes > 9 ? minutes : '0' + minutes}`)
        }, 500);
        return () => {
            clearTimeout(changeTimeout)
        }
    }, [hours, minutes])
    return (
        <div className="flex justify-center gap-4 mt-4">
            <div className="flex flex-col text-lg">
                <button type="button" onClick={() => setDayMode('am')} className={`border ${dayMode == 'am' ? 'bg-x-yellow/30' : 'bg-x-yellow/10'} border-b-0 border-gray-500 text-sm rounded-t-lg h-1/2 px-2`}>قبل از ظهر</button>
                <button type="button" onClick={() => setDayMode('pm')} className={`border ${dayMode == 'pm' ? 'bg-x-yellow/30' : 'bg-x-yellow/10'} border-gray-500 text-sm rounded-b-lg h-1/2 px-2`}>بعد از ظهر</button>
            </div>
            <div className="flex flex-row-reverse items-center gap-2 text-3xl font-bold">
                <div className="w-24 relative flex flex-col gap-2 items-center">
                    {/* no-arrows  */}
                    <input type="number" min={0} max={12} className={`w-full pr-3 form-input ${valid ? 'bg-x-yellow/10' : 'bg-red-500/10 invalid'} h-20 text-center`}
                        value={getHourValue()}
                        onChange={handleChangeHours}/>
                    {(hours > 12 || hours === 0) && <span className="text-xs absolute -top-2 bg-x-yellow px-1 rounded-sm">{hours}</span>}
                </div>
                <span>:</span>
                <div className="w-24 relative flex flex-col gap-2 items-center">
                    {/* no-arrows  */}
                    <input type="number" min={0} max={60} className={`w-full pr-3 form-input ${valid ? 'bg-x-yellow/10' : 'bg-red-500/10 invalid'} h-20 text-center`}
                        value={minutes > 9 ? `${minutes}` : `0${minutes}`}
                        onChange={(e) => setMinutes(e.target.valueAsNumber >= 60 ? 0 : Math.abs(e.target.valueAsNumber))}/>
                </div>
            </div>
        </div>
    );
}
 
export default TimePicker;