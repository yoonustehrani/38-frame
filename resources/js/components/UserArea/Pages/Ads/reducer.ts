import { Reducer } from "react"
import { createAdAction, createAdActionTypes, newAdInstance, pricingType } from "./types"
const {
    SET_CATEGORY,
    SET_TITLE,
    SET_PRICE,
    SET_PRICING_TYPE,
    SET_ADDRESS,
    SET_DELIVERY_TYPE,
    SET_DESCRIPTION,
    SET_PHONE_NUMBER 
} = createAdActionTypes

export const provideAdReducer: Reducer<newAdInstance, createAdAction> = (state, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, category_id: action.payload as number}
        case SET_TITLE:
            return {...state, title: action.payload as string}
        case SET_PRICING_TYPE:
            let pricingType = action.payload as pricingType
            return {...state, price: pricingType === 'price' ? state.price : null}
        case SET_PRICE:
            return {...state, price: action.payload as number}
        case SET_DESCRIPTION:
            return {...state, description: action.payload as string}
        case SET_PHONE_NUMBER:
            return {...state, phone_number: action.payload as string}
        case SET_ADDRESS:
            return {...state, address: action.payload as string}
        case SET_DELIVERY_TYPE:
            let deliveryType = action.payload as number
            return {...state, address: deliveryType == 3 ? null : ''}
        default:
            return state
    }
}