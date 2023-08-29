export interface newAdInstance {
    photos: UploadingFiles[],
    title: string
    description: string
    price: number | null
    category_id: number
    phone_number: string
    address: string | null
}

export interface SiteCategory {
    id: number
    label: string
}

export interface UploadingFiles {
    sizeInKb: number
    allowed: boolean
    src: string
    name: string
    file: File
}

export const initialFormValues: newAdInstance = {
    photos: [],
    title: '',
    description: '',
    phone_number: '',
    address: null,
    price: null,
    category_id: 1
}

export const createAdActionTypes = {
    SET_CATEGORY: 'SET_CATEGORY',
    SET_TITLE: 'SET_TITLE',
    SET_PRICE: 'SET_PRICE',
    SET_PRICING_TYPE: 'SET_PRICING_TYPE',
    SET_PHONE_NUMBER: 'SET_PHONE_NUMBER',
    SET_DELIVERY_TYPE: 'SET_DELIVERY_TYPE',
    SET_DESCRIPTION: 'SET_DESCRIPTION',
    SET_ADDRESS: 'SET_ADDRESS'
} as const

export type createAdAction = {
    type: keyof typeof createAdActionTypes
    payload: any
}
export type pricingType = 'negotiation' | 'trade-off' | 'price';