import { number, object, string } from 'yup';

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

export const registerShopFormValidationSchema = object({
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
    }),
    iban:  string().required(messages.required).length(24, messages.length(24, 'رقم')),
    owner_fullname: string().required(messages.required).min(3, messages.min(3)).max(60, messages.max(60)),
    owner_national_id: string().required(messages.required).length(10, messages.length(10, 'رقم')),
    website: string().optional().matches(/^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+)(?:\/.*)?$/, 'یک دامنه معتبر وارد نمایید.'),
    accept_policy: string().required(),
})