import { FC } from "react";
import { FormikHelpers, FormikValues } from "formik";
import { registerLabFormValidationSchema } from "./validationSchemas";
import { sendShopRegisteringRequest } from "./api";
import LeveledForm from "../../../WebPanel/components/LeveledForm/LeveledForm";

const levels = [
    {
        lazy: () => import('./Forms/Register/GeneralDataForm'),
        title: 'اطلاعات کلی لابراتوار',
        initialValues: {
            brand: 'برند تستی',
            founded_in_year: 1395,
            category: '',
            bio: 'همیشه ارزون میفروشیم',
            address: 'مشهد سناباد ۸۸',
        }
    },
    {
        lazy: () => import('./Forms/Register/LabServicesForm'),
        title: 'خدمات لابراتوار',
        initialValues: {
            services: []
        }
    },
    {
        lazy: () => import('./Forms/Register/Logo'),
        title: 'هویت بصری لابراتوار',
        initialValues: {}
    },
    {
        lazy: () => import('./Forms/Register/LabDetails'),
        title: 'اطلاعات تکمیلی',
        initialValues: {
            owner_fullname: 'یونس طهرانی',
            owner_national_id: '0926534831',
            website: '',
            iban: '130170000000114503193004'
        }
    },
    {
        lazy: () => import('./Forms/Register/ContactInfoForm'),
        title: 'راه های ارتباطی',
        initialValues: {
            phone_number: '09150013422',
            address_line: '',
            meta: {
                social: {
                    instagram: 'soolakhi',
                    telegram_channel: 'soolakhitg'
                },
                workingDays: null,
                onlySms: false
            },
        }
    },
    {
        lazy: () => import('./Forms/Register/AcceptPolicyForm'),
        title: 'شرایط و ضوابط',
        initialValues: {
            accpect_policy: ''
        }
    }
]

const RegisterLab: FC = () => {
    const handleSubmit = (values: FormikValues, { setSubmitting }: FormikHelpers<any>) => {
        const [response, cancel] = sendShopRegisteringRequest(values)
        response.then(r => {
            if (r.hasErrors()) {
                console.error(r.getContent());
                return
            }
            console.log(r.getContent());
        })
    }
    return (
        <LeveledForm pageTitle="ثبت نام به عنوان لابراتوار، تاریکخانه، تعمیرکار"
            formTitle="فرم ایجاد لابراتوار در ۳۸ فریم"
            breadCrumbs={[
                ['لابراتوار', '/lab'],
                ['لابراتوار جدید', undefined]
            ]}
            levels={levels}
            handleSubmit={handleSubmit}
            validationSchema={registerLabFormValidationSchema}
        />
    )
}
 
export {RegisterLab as Component}