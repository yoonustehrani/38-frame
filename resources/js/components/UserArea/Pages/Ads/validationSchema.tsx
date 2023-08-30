import { number, object, string } from 'yup'
import { AdObject } from './types'

export const adDetailsSchema = object({
    title: string().required().min(3).max(80),
    description: string().required().min(3).max(600),
    delivery_type: number().oneOf([1, 2, 3]),
    pricing_type: string().required().oneOf(['negotiation', 'trade-off', 'price']),
    price: number().integer().required().min(0).max(500_000_000),
    address: string().when('delivery_type', ([delivery_type], builder) => {
        return delivery_type !== 2 ? builder.required() : builder.notRequired()
    }),
    phone_number: string().required().matches(/09[0-9]{9}/),
    category_id: number().required(),
    // address_line: string().required().matches(/0[0-9]{6,}/)
} as {[key in keyof AdObject]: any})