export interface newAdInstance {
    photos: any[],
    title: string
    description: string
    price: number | null
    category_id: number
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
    price: null,
    category_id: 1
}

export const createAdActionTypes = {
    SET_CATEGORY: 'SET_CATEGORY',
    SET_TITLE: 'SET_TITLE',
} as const

export type createAdAction = {
    type: keyof typeof createAdActionTypes
    payload: any
}
export type sellModeType = 'negotiation' | 'trade-off' | 'price';