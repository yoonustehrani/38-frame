import { FC, useEffect } from "react";
import { sendShopRegisteringRequest } from "./api";
import { toast } from "react-toastify";
import ToastError from "../../../../utils/ToastError/ToastError";
import { ResponseData } from "../../../../utils/HttpClient/types";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Shop, getShop } from "../../hooks/useShop";
import LeveledForm from "../../../WebPanel/components/LeveledForm/LeveledForm";
import { FormikHelpers, FormikValues } from "formik";
import { registerShopFormValidationSchema } from "./validationSchemas";

const levels = [
    {
        lazy: () => import('./Forms/Register/GeneralDataForm'),
        title: 'اطلاعات کلی فروشگاه',
        initialValues: {
            brand: '',
            founded_in_year: 1402,
            category: '1',
            bio: '',
            __inShop: 'no',
            address: '',
        }
    },
    {
        lazy: () => import('./Forms/Register/ShopDetails'),
        title: 'اطلاعات تکمیلی',
        initialValues: {
            owner_fullname: '',
            owner_national_id: '',
            website: '',
            iban: '',
        }
    },
    {
        lazy: () => import('./Forms/Register/ContactInfoForm'),
        title: 'راه های ارتباطی',
        initialValues: {
            phone_number: '',
            address_line: '',
            meta: {
                social: {
                    instagram: '',
                    telegram_channel: '',
                },
            },
        }
    },
    {
        lazy: () => import('./Forms/Register/AcceptPolicyForm'),
        title: 'شرایط و ضوابط',
        initialValues: {
            accept_policy: ''
        }
    }
]

async function loader(): Promise<Shop | null> {
    const [request] = getShop()
    let response = await request
    if (! response.hasErrors()) {
        return response.getContent<Shop>()
    }
    return null
}

const RegisterShop: FC = () => {
    const navigate = useNavigate()
    const shop = (useLoaderData() as Shop | null)
    useEffect(() => {
        shop && navigate('/shop')
    }, []);

    const handleSubmit = (values: FormikValues, { setSubmitting }: FormikHelpers<any>) => {
        const loadingId = toast.loading("در حال ارسال ...")
        const [response, cancel] = sendShopRegisteringRequest(values)
        response.then(r => {
            toast.done(loadingId)
            if (r.hasErrors()) {
                ToastError(r.getErrors())
                return
            }
            toast.success(r.getContent<ResponseData>().message)
            setTimeout(() => {
                navigate('/shop')
            }, 500);
        })
    }
   return !shop && (
        <LeveledForm pageTitle="ثبت نام به عنوان فروشنده"
            formTitle="فرم ایجاد فروشگاه در ۳۸ فریم"
            breadCrumbs={[
                ['فروشگاه', '/shop'],
                ['فروشگاه جدید', undefined]
            ]}
            levels={levels}
            handleSubmit={handleSubmit}
            validationSchema={registerShopFormValidationSchema}
        />
   )
}

export {RegisterShop as Component, loader}