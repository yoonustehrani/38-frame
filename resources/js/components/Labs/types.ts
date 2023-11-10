export type StarRatingAmount = 0 | 1 | 2 | 3 | 4 | 5

export interface LabObject {
    id: number
    brand: string
    active?: boolean
    logo: string
    location: string
    rating: StarRatingAmount
    uri: string
    category: string
}
export const LabCategory = {
    'special-lab': 'لابراتوار تخصصی آنالوگ',
    'photography-darkroom': 'لابراتوار / تاریکخانه عکاسی',
    'home-lab': 'لابراتوار شخصی / لابراتوار خانگی'
} as const

export type CityObject = {id: number, name: string, province_name: string};

export interface PageMeta {
    current_page: number,
    from: number,
    last_page: number,
    links: {
        url: string | null,
        label: string,
        active: boolean
    }[],
    path: string,
    per_page: number,
    to: number,
    total: number
}

export const initialFilters = { brand: '', onlyActive: false, city: -1, category: -1, services: [] as string[] }

type SetFilterAction = {type: 'SET_FILTER', payload: Partial<typeof initialFilters>}
type RemoveFilterAction = {type: 'REMOVE_FILTER', payload: keyof typeof initialFilters}
export type FilteringActions = SetFilterAction | RemoveFilterAction

export interface LabService {
    id: number
    label: number
    parent_id: number
}
export interface ServiceGroup {
    id: number
    label: string
    children: LabService[]
}