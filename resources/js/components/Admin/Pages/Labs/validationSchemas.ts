import { array, boolean, number, object, string } from 'yup';

const messages = {
    required: 'لطفا این فیلد را پاسخ دهید.',
    invalid_phone_numbe: 'فرمت شماره تلفن معتبر نیست.',
    min(chars: number) {
        return `حداقل ${chars} کاراکتر وارد کنید.`;
    },
    max(chars: number) {
        return `حداکثر می توانید ${chars} کاراکتر وارد کنید.`;
    },
    length(chars: number, name:string =  'کاراکتر') {
        return `باید ${chars} ${name} باشد.`;
    }
}

export const registerLabFormValidationSchema = object({
    brand: string().required(messages.required).min(3, messages.min(3)).max(40, messages.max(40)),
    founded_in_year: number().required(messages.required).min(1300).max(1402),
    bio: string().optional().min(10, messages.min(10)).max(300, messages.max(300)),
    address: string().optional().min(10, messages.min(10)).max(300, messages.max(300)),
    category: string().required(messages.required),
    phone_number: string().required(messages.required).length(11, messages.length(11, 'رقم')).matches(/09[0-9]{9}/, {message: messages.invalid_phone_numbe}),
    address_line: string().length(11, messages.length(11, 'رقم')),
    meta: object({
        social: object({
            instagram: string().optional().min(4, messages.min(4)).max(60, messages.max(60)),
            telegram_channel: string().optional().min(4, messages.min(4)).max(60, messages.max(60)),
        }),
        workingDays: array().optional().of(object({
            name: string(),
            id: number(),
            hours: object({
                from: string(),
                to: string()
            }).optional()
        })),
        onlySms: boolean().default(false)
    }),
    services: array().optional().of(object({
        service_id: number().required(),
        description: string().required().min(3).max(200),
        price: number().optional().min(1000),
        price_note: string().optional().min(3)
    })),
    iban:  string().required().length(24, messages.length(24, 'رقم')),
    owner_fullname: string().required().min(3, messages.min(3)).max(60, messages.max(60)),
    owner_national_id: string().required().length(10, messages.length(10, 'رقم')),
    website: string().optional().url(),
    accpect_policy: string().required()
})