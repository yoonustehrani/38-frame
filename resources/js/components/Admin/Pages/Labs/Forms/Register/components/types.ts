export interface WorkingDayInstance {
    id: number,
    label: string,
    open: boolean,
    hours: {
        from: null | string
        to: null | string
    }
}

export interface ServiceItem {
    service_id: number
    title: string
    description: string
    price: null | number
    price_note: null | string
}


export interface ServiceGroup {
    id: number
    name: string
    label: string
    type: 'service'
    description: string
}

export interface ServiceInstance extends ServiceGroup {
    parent_id: number
}

type TOGGLE_DAY_OPEN = {type: 'TOGGLE_DAY_OPEN', payload: number}
type CLOSE_DAY = {type: 'CLOSE_DAY', payload: number}
type SET_OPENING_HOUR = {type: 'SET_OPENING_HOUR', payload: {id: number, time: string} }
type SET_CLOSING_HOUR = {type: 'SET_CLOSING_HOUR', payload: {id: number, time: string} }
type OPEN_ALL_DAYS = {type: 'OPEN_ALL_DAYS'}


export type ActionTypes = TOGGLE_DAY_OPEN | OPEN_ALL_DAYS | CLOSE_DAY | SET_OPENING_HOUR | SET_CLOSING_HOUR

const dayNames = ['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'] as const

export const daysOfTheWeek: WorkingDayInstance[] = dayNames.map((d, i) => ({
    id: i,
    label: d,
    open: false,
    hours: {
        from: '9:00',
        to: '17:00'
    }
}))