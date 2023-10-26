import { FC, useId, useMemo } from "react";
import { WorkingDayInstance } from "./types";
import { Switch } from "@mui/material";
import TimePicker from "./TimePicker";

interface DayEditingCardProps extends WorkingDayInstance {
    toggleOpen: () => void
    setOpeningTime: (time:string) => void
    setClosingTime: (time:string) => void
}

function compareTime(min: string | null, max: string | null) {
    if (min == null || max == null) {
        return true
    }
    const [hour1, minute1] = min.split(':')
    const [hour2, minute2] = max.split(':')
    
    if (Number(hour1) < Number(hour2)) {
        return true;
    } else {
        return Number(minute1) < Number(minute2)
    }
}

const DayEditingCard: FC<DayEditingCardProps> = ({id, label, hours, open, toggleOpen, setOpeningTime, setClosingTime}) => {
    const defaultHours = useMemo(() => {
        return hours
    },[id])
    return (
        <div className="w-full md:min-w-[50%] md:w-fit px-3 py-4 rounded-md bg-x-yellow/10">
            <div className="flex items-center justify-between text-sm">
                <h3 className="text-right text-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/><path d="M12,6a1,1,0,0,0-1,1v4.325L7.629,13.437a1,1,0,0,0,1.062,1.7l3.84-2.4A1,1,0,0,0,13,11.879V7A1,1,0,0,0,12,6Z"/></svg>
                    {label}
                </h3>
                <div>
                    <label className="cursor-pointer" htmlFor="day-switch">فعال</label>
                    <Switch onChange={toggleOpen} checked={open} id="day-switch" size="small" color="warning"/>
                </div>
            </div>
            {open && (
                <div className="flex flex-col items-center gap-6 mt-4">
                    <div className="px-4">
                        <span className="text-sm">ساعت شروع را وارد کنید.</span>
                        <TimePicker key={id} defaultTime={defaultHours.from} valid={compareTime(hours.from, hours.to)} onChange={setOpeningTime}/>
                    </div>
                    <hr className="w-4/5" />
                    <div className="px-4">
                        <span className="text-sm">ساعت پایان را وارد کنید.</span>
                        <TimePicker key={id} defaultTime={defaultHours.to}  valid={compareTime(hours.from, hours.to)}  onChange={setClosingTime}/>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default DayEditingCard;