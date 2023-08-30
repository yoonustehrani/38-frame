

export interface SiteCategory {
    id: number
    label: string
}

export interface UploadingFiles {
    file: File,
    sizeInKb: number
    allowed: boolean
    src: string
    name: string
}

export interface AdObject {
    title: string
    description: string
    price: number | null
    category_id: number
    phone_number: string
    address: string | null
    pricing_type: pricingType
    delivery_type: number
}

export interface reducerState {
    photos: UploadingFiles[],
    ad: AdObject
}

export const initialFormValues: reducerState = {
    photos: [],
    ad: {
        title: '',
        description: '',
        phone_number: '',
        address: null,
        price: null,
        category_id: 1,
        pricing_type: 'price',
        delivery_type: 1
    } 
}

// export type kos = 
export const createAdActionTypes = {
    MODIFY_ADD: 'MODIFY_ADD',
    ATTACH_PHOTOS: 'ATTACH_PHOTOS',
    REMOVE_PHOTO: 'REMOVE_PHOTO'
} as const

// export type modifyAdAction<> = {
//     action: 'MODIFY_ADD',
//     payload: [
//         keyof AdObject,
//         AdObject[keyof AdObject]
//     ]
// }
export type createAdAction = {
    type: keyof typeof createAdActionTypes
    payload: any
}

export type pricingType = 'negotiation' | 'trade-off' | 'price';