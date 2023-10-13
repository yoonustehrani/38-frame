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