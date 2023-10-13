import { FC, Suspense, lazy, useState } from "react";
import BreadCrumb, { BreadCrumbItem } from "../../components/BreadCrumb";
import FormSubtitle from "../../components/FormSubtitle";
import { toPersian } from "../../../../utils/Number/numbers";
import LevelController from "./Forms/Register/components/LevelController";
import { Form, Formik, FormikErrors, FormikHelpers, FormikValues } from "formik";
import { registerShopFormValidationSchema } from "./validationSchemas";
import {formGeneralErrorsContext} from '../../context/formContext'
import { sendShopRegisteringRequest } from "./api";
const levels = [
    {
        lazy: () => import('./Forms/Register/GeneralDataForm'),
        title: 'اطلاعات کلی فروشگاه',
        initialValues: {
            brand: 'برند تستی',
            founded_in_year: 1395,
            category: 'فروشگاه تخصصی لوازم عکاسی',
            bio: 'همیشه ارزون میفروشیم',
            address: 'مشهد سناباد ۸۸',
        }
    },
    {
        lazy: () => import('./Forms/Register/Logo'),
        title: 'هویت بصری فروشگاه',
        initialValues: {}
    },
    {
        lazy: () => import('./Forms/Register/ShopDetails'),
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
] as const

const formInitialValues = Object.fromEntries(levels.flatMap(x => Object.entries(x.initialValues)))

function getLevelKeys (level: number) {
    return Object.keys(levels[level].initialValues)
}


const RegisterShop: FC = () => {
    const [level, setLevel] = useState(0)
    const [displayAllErrors, setDisplayAllErrors] = useState(false)
    if (level > levels.length) return null
    const CurrentLevel = lazy(levels[level].lazy)
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
    const nextLevel = level < (levels.length - 1) ? () => { 
        setLevel(l => l + 1)
     } : undefined
    const prevLevel = level > 0 ? () => { setLevel(l => l - 1) } : undefined
    function getLevelErrors(_level: number, errors: FormikErrors<typeof formInitialValues>) {
        return getLevelKeys(_level).filter(key => Object.keys(errors).includes(key))
    }
    return (
        <formGeneralErrorsContext.Provider value={displayAllErrors}>
            <section>
                <h1 className="font-bold text-2xl">ثبت نام به عنوان فروشنده</h1>
                <BreadCrumb>
                    <BreadCrumbItem link="/">ناحیه کاربری</BreadCrumbItem>
                    <BreadCrumbItem link="/shop">فروشگاه</BreadCrumbItem>
                    <BreadCrumbItem>ایجاد فروشگاه</BreadCrumbItem>
                </BreadCrumb>
                <section className="w-full xl:w-3/4 2xl:w-3/5 border border-black/5 shadow-md rounded-lg p-6">
                    <h2 className="font-semibold text-xl text-gray-800 mt-4 mb-6 svg-inherit col-span-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                            <path d="M19.949,5.536,16.465,2.05A6.958,6.958,0,0,0,11.515,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V10.485A6.951,6.951,0,0,0,19.949,5.536ZM18.535,6.95A4.983,4.983,0,0,1,19.316,8H15a1,1,0,0,1-1-1V2.684a5.01,5.01,0,0,1,1.051.78ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5A3,3,0,0,1,7,2h4.515c.164,0,.323.032.485.047V7a3,3,0,0,0,3,3h4.953c.015.162.047.32.047.485Z"/>
                        </svg>
                        {` `}
                        فرم ایجاد فروشگاه در ۳۸ فریم
                    </h2>
                    <Formik 
                        initialValues={formInitialValues}
                        validationSchema={registerShopFormValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({errors, submitForm}) => {
                            return (
                                <>
                                    <div className="w-full overflow-x-auto h-28 px-8">
                                        <section className="w-[200%] md:w-auto px-8">
                                            <div className="bg-gray-300 h-2 rounded-full w-full mt-8">
                                                <div style={{ width: `${(100 / (levels.length - 1)) * level}%` }} className="h-2 bg-zebra width-transition"></div>
                                            </div>
                                            <div className="grid grid-rows-1 grid-flow-col place-content-between text-center mt-2 w-full">
                                                {levels.map(({title}, i) => {
                                                    let hasErrors = displayAllErrors && getLevelErrors(i, errors).length > 0
                                                    return (
                                                        <div key={i} className="px-3 grow text-center pt-3 relative flex justify-center">
                                                            <span onClick={() => setLevel(i)} className={`cursor-pointer duration-300 circleular-dot text-black ${i <= level ? 'bg-x-yellow' : 'bg-gray-400'}`}>
                                                                {toPersian(i + 1)}
                                                            </span>
                                                            <span onClick={() => setLevel(i)} className={`cursor-pointer absolute w-max duration-300 text-xs ${i <= level ? 'text-black' : 'text-gray-500'}`}>
                                                                {title}
                                                                {hasErrors && (
                                                                    <span className="mx-1 h-4 w-4 inline-grid place-content-center bg-red-500 text-white rounded-full text-center">!</span>
                                                                )}
                                                            </span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </section>
                                    </div>
                                    <Form onSubmit={e => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setDisplayAllErrors(true)
                                        submitForm()
                                    }} noValidate className={"grid lg:grid-cols-2 gap-8 mt-16 px-6 fadeIn"}>
                                        <FormSubtitle className="mb-3 text-xl" text={levels[level].title}/>
                                        <Suspense fallback={<>در حال لود کردن</>}>
                                            <CurrentLevel/>
                                        </Suspense>
                                        <LevelController nextLevel={nextLevel} prevLevel={prevLevel}/>
                                    </Form>
                                </>
                            )
                        }}
                    </Formik>
                </section>
            </section>
        </formGeneralErrorsContext.Provider>
    );
}
 
export {RegisterShop as Component}