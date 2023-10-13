import { FC, useCallback, useEffect, useReducer, useState } from "react";
import { WorkingDayInstance } from "./types";
import DayEditingCard from "./DayEditingCard";
import { useField } from "formik";

const dayNames = ['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'] as const

const daysOfTheWeek: WorkingDayInstance[] = dayNames.map((d, i) => ({
    id: i,
    label: d,
    open: false,
    hours: {
        from: '9:00',
        to: '17:00'
    }
}))

interface WorkingDaysProps {
    className?: string
    name?: string
    onChange?: (value: typeof daysOfTheWeek[keyof typeof daysOfTheWeek]) => void
}

type TOGGLE_DAY_OPEN = {type: 'TOGGLE_DAY_OPEN', payload: number}
type CLOSE_DAY = {type: 'CLOSE_DAY', payload: number}
type SET_OPENING_HOUR = {type: 'SET_OPENING_HOUR', payload: {id: number, time: string} }
type SET_CLOSING_HOUR = {type: 'SET_CLOSING_HOUR', payload: {id: number, time: string} }
type OPEN_ALL_DAYS = {type: 'OPEN_ALL_DAYS'}


type ActionTypes = TOGGLE_DAY_OPEN | OPEN_ALL_DAYS | CLOSE_DAY | SET_OPENING_HOUR | SET_CLOSING_HOUR

const workingDaysReducer = (state: WorkingDayInstance[], action: ActionTypes) => {
    switch (action.type) {
        case 'TOGGLE_DAY_OPEN':
            return state.map(x => x.id === action.payload ? {...x, open: ! x.open} : x)
        case 'OPEN_ALL_DAYS':
            return state.map(x => ({...x, open: true}))
        case 'CLOSE_DAY':
            return state.map(x => x.id === action.payload ? {...x, open: false} : x)
        case 'SET_OPENING_HOUR':
            return state.map(x => x.id === action.payload.id ? {...x, hours: {...x.hours, from: action.payload.time}} : x)
        case 'SET_CLOSING_HOUR':
            return state.map(x => x.id === action.payload.id ? {...x, hours: {...x.hours, to: action.payload.time}} : x)
        default:
            return state
    }
}

const classes = {
    active: 'border-x-yellow bg-x-yellow/90 text-gray-800 focus:ring focus:ring-x-yellow/40',
    inActive: 'border-gray-400'
}

const WorkingDays: FC<WorkingDaysProps> = ({className}) => {
    const [workingDays, dispatchChanges] = useReducer(workingDaysReducer, daysOfTheWeek)
    const [WDField, WDMeta, WDHelpers] = useField({name: 'meta[workingDays]'})
    const [editingDay, setEditingDay] = useState<number>()
    const toggleDayOpen = (dayId: number) => dispatchChanges({type: 'TOGGLE_DAY_OPEN', payload: dayId})
    const setOpeningTime = useCallback((time: string) => {
        if (typeof editingDay === 'number') {
            dispatchChanges({type: 'SET_OPENING_HOUR', payload: {id: editingDay, time}})   
        }
    }, [editingDay]);
    const setClosingTime = useCallback((time: string) => {
        if (typeof editingDay === 'number') {
            dispatchChanges({type: 'SET_CLOSING_HOUR', payload: {id: editingDay, time}})   
        }
    }, [editingDay]);
    const ALL_DAYS_ARE_SELECTED = workingDays.filter(x => ! x.open).length === 0
    useEffect(() => {
        let worker = setTimeout(() => {
            WDHelpers.setValue(workingDays)
        }, 500);
        return () => {
            clearTimeout(worker)
        }
    }, [workingDays])
    return (
        <div className="py-3">
            <div className="flex flex-wrap text-sm md:text-base text-gray-800 gap-4">
                <button disabled={ALL_DAYS_ARE_SELECTED} onClick={() => dispatchChanges({type: 'OPEN_ALL_DAYS'})} type="button" className={`border ${ALL_DAYS_ARE_SELECTED ? classes.active : classes.inActive} px-2 py-1 rounded-md`}>همه روز ها</button>
                <div className="flex">
                    {workingDays.map(day => (
                        <button 
                            onClick={() => {
                                ! day.open && toggleDayOpen(day.id)
                                editingDay !== day.id ? setEditingDay(day.id) : setEditingDay(undefined)
                            }}
                            type="button"
                            className={`${day.open ? classes.active : classes.inActive} duration-300 border last-of-type:border-l border-l-0 px-2 py-1 first-of-type:rounded-r-md last-of-type:rounded-l-md`}
                        key={day.id}>{day.label}</button>
                    ))}
                </div>
                {typeof editingDay !== 'undefined' && <DayEditingCard setOpeningTime={setOpeningTime} setClosingTime={setClosingTime} toggleOpen={() => toggleDayOpen(editingDay)} {...workingDays[editingDay]}/>}
            </div>
            <div>
                {/* TODO: Summary goes here */}
            </div>
        </div>
    );
}
 
export default WorkingDays;