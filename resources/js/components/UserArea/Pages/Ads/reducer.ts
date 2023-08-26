import { Reducer } from "react"
import { createAdAction, createAdActionTypes, newAdInstance } from "./types"
const { SET_CATEGORY, SET_TITLE } = createAdActionTypes

export const provideAdReducer: Reducer<newAdInstance, createAdAction> = (state, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, category_id: action.payload as number}
        case SET_TITLE:
            return {...state, title: action.payload as string}
        default:
            return state
    }
}