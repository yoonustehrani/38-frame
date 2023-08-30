import { Reducer } from "react"
import { createAdAction, createAdActionTypes, reducerState } from "./types"
const {
    MODIFY_ADD,
    ATTACH_PHOTOS,
    REMOVE_PHOTO
} = createAdActionTypes

export const provideAdReducer: Reducer<reducerState, createAdAction> = (state, action) => {
    switch (action.type) {
        case MODIFY_ADD:
            return {...state, ad: {...state.ad, ...action.payload}}
        case ATTACH_PHOTOS:
            return {...state, photos: [...state.photos, ...action.payload]}
        case REMOVE_PHOTO:
            return {...state, photos: state.photos.filter(f => f.src !== action.payload)}
        default:
            return state
    }
}