import { FC } from "react";
import { FormikHelpers, FormikValues } from "formik";
import { sendMerchandiseStoreRequest } from "../api";
import { toast } from "react-toastify";
import ToastError from "../../../../../utils/ToastError/ToastError";
import { ResponseData } from "../../../../../utils/HttpClient/types";
import { useNavigate } from "react-router-dom";
import useShop from "../../../hooks/useShop";
import LeveledForm from "../../../../WebPanel/components/LeveledForm/LeveledForm";

const levels = [
    {
        lazy: () => import('./Forms/GeneralMerchandiseData'),
        title: 'اطلاعات محصول',
        initialValues: {
            title: '',
            category_id: '',
            description: '',
            available_quantity: 0
        }
    },
    {
        lazy: () => import('./Forms/MerchandisePricing'),
        title: 'قیمت گذاری کالا',
        initialValues: {
            price: '',
            __hasOffer: 'no',
            offer_type: 'on-price',
            offer_amount: 0,
        }
    },
    {
        lazy: () => import('./Forms/MerchandiseImageUpload'),
        title: 'تصاویر کالا',
        initialValues: {
            images: [],
            avatar: null
        }
    },
    // {
    //     lazy: () => import('./Forms/MerchandiseImageUpload'),
    //     title: 'تحویل کالا',
    //     initialValues: {
    //         images: [],
    //         avatar: ''
    //     }
    // },
    // {
    //     lazy: () => import('./Forms/ContactInfoForm'),
    //     title: 'راه های ارتباطی',
    //     initialValues: {
    //         phone_number: '',
    //         address_line: '',
    //         meta: {
    //             social: {
    //                 instagram: '',
    //                 telegram_channel: '',
    //             },
    //         },
    //     }
    // },
    // {
    //     lazy: () => import('./Forms/AcceptPolicyForm'),
    //     title: 'شرایط و ضوابط',
    //     initialValues: {
    //         accept_policy: ''
    //     }
    // }
]
// as const



const CreateMerchandise: FC = () => {
    const navigate = useNavigate()
    const {shop} = useShop()
    if (! shop) return;
    const handleSubmit = async (values: FormikValues, { setSubmitting }: FormikHelpers<any>) => {
        if (shop) {
            const loadingId = toast.loading("در حال ارسال ...")
            const [response, cancel] = sendMerchandiseStoreRequest(shop.id ,values)
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
            return cancel
        }
    }
    return (
        <LeveledForm pageTitle="ایجاد کالا"
            formTitle={`فرم ایجاد کالا در فروشگاه ${shop.brand}`}
            breadCrumbs={[
                ['فروشگاه', '/shop'],
                ['کالاهای فروشگاه', '/shop/merchandise'],
                ['کالای جدید', undefined]
            ]}
            levels={levels}
            handleSubmit={handleSubmit}
        />
    )
}
 
export {CreateMerchandise as Component}