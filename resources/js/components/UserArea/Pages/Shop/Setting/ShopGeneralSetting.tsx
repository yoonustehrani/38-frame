import { Form, Formik, FormikValues } from "formik";
import Input from "../../../../WebPanel/components/Formik/Input";
import useShop, { Shop } from "../../../hooks/useShop";
import TextArea from "../../../../WebPanel/components/Formik/TextArea";
import SelectBox from "../../../../WebPanel/components/Formik/SelectBox";
import { sendShopAlterRequest } from "./api";
import ToastError from "../../../../../utils/ToastError/ToastError";
import { toast } from "react-toastify";
import UploadAvatar from "../../../components/UploadAvatar/UploadAvatar";

const ShopGeneralSetting = () => {
    const {shop, setShop} = useShop()
    async function submitData(values: FormikValues) {
        if (! shop) return;
        const loadingId = toast.loading('در حال ارسال اطلاعات ...')
        const [alterShop] = sendShopAlterRequest(shop.id, values)
        let res = await alterShop
        toast.done(loadingId)
        if (res.hasErrors()) {
            return ToastError(res.getErrors());
        }
        let {message, data} = res.getContent<{message: string, data: Shop}>()
        toast.success(message)
        setShop(data)
    }
    return shop && (
        <section className="w-full mt-8 flex flex-col lg:flex-row gap-4 lg:gap-8">
            <section className="w-full lg:w-1/3 border border-black/5 shadow-md rounded-xl h-fit flex flex-col gap-8 justify-between py-6 items-center">
                {! shop.avatar && (
                    <div className="px-2">
                        <p className="text-red-500 bg-red-100 text-sm rounded-md px-3 py-1 text-center">
                        فروشگاه شما فاقد تصویر لوگو می باشد.
                        {/* <br />
                        برای بهتر دیده شدن فروشگاه تان لوگوی خود را آپلود کنید. */}
                        </p>
                    </div>
                )}
                <div className="flex flex-col items-center justify-center gap-6">
                    <Formik onSubmit={submitData} initialValues={{ avatar: null }}>
                        {({submitForm}) => (
                            <UploadAvatar submit={submitForm} inputName="avatar" setAvatar={(avatar: string) => setShop((shop) => ({...shop, avatar} as Shop))}>
                                {shop.avatar ? (
                                    <img className="h-full w-auto" src={shop.avatar} alt="" />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path d="M19.14,21.75H4.86a2.61,2.61,0,0,1-2.61-2.61V4.86A2.61,2.61,0,0,1,4.86,2.25H19.14a2.61,2.61,0,0,1,2.61,2.61V19.14A2.61,2.61,0,0,1,19.14,21.75ZM4.86,3.75A1.11,1.11,0,0,0,3.75,4.86V19.14a1.11,1.11,0,0,0,1.11,1.11H19.14a1.11,1.11,0,0,0,1.11-1.11V4.86a1.11,1.11,0,0,0-1.11-1.11Z"/><path d="M3,18.81a.76.76,0,0,1-.57-.26.75.75,0,0,1,.09-1.06l5.12-4.32a2,2,0,0,1,2.7.11l2.43,2.43a.5.5,0,0,0,.65,0L15.78,14a2,2,0,0,1,2.44,0l3.25,2.59a.75.75,0,1,1-.94,1.18l-3.24-2.6a.5.5,0,0,0-.61,0L14.32,17a2,2,0,0,1-2.61-.18L9.28,14.34a.5.5,0,0,0-.67,0L3.48,18.64A.72.72,0,0,1,3,18.81Z"/><path d="M15,11.75A2.75,2.75,0,1,1,17.75,9,2.75,2.75,0,0,1,15,11.75Zm0-4A1.25,1.25,0,1,0,16.25,9,1.25,1.25,0,0,0,15,7.75Z"/></svg>    
                                )}
                            </UploadAvatar>
                        )}
                    </Formik>
                    <p className="text-gray-400 text-sm text-center">
                        <span>عکس ها با فرمت jpeg، jpg، png و webp قابل آپلود هستند.</span>
                        <br />
                        <span>حداکثر حجم فایل:‌ 500 کیلوبایت</span>
                    </p>
                </div>
                <button className="text-red-700 text-sm font-semibold px-3 py-2 rounded-xl bg-red-100 hover:bg-red-200 duration-300">حذف عکس پروفایل</button>
            </section>
            <section className="w-full lg:w-2/3 border border-black/5 shadow-md rounded-lg py-3 px-5">
                <Formik onSubmit={submitData} initialValues={{ 
                    brand: shop.brand,
                    bio: shop.bio,
                    category: shop.category,
                    founded_in_year: shop.founded_in_year
                }}>
                    <Form className="grid md:grid-cols-2 gap-6 gap-y-8 my-6 pb-6" action="#">
                        <h2 className="font-semibold text-gray-800 h-5 svg-inherit col-span-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
                                <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/>
                                <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/>
                            </svg>
                            اطلاعات پایه ای
                        </h2>
                        <p className="text-sm text-justify col-span-full bg-sky-100 text-sky-800 py-1 px-3 rounded-md">
                            <span></span>
                            دقت بفرمایید پس از تغییر هر یک از مقادیر این فرم، تا زمانی که مدیران وبسایت این اطلاعات را تایید نکنند فروشگاه شما به حالت تعلیق درخواهد آمد.
                        </p>
                        <Input required name="brand" id="brand" label="نام برند فروشگاه" className="py-2 px-3"/>
                        <SelectBox required name="category" id="category" className="form-input py-1 pt-3 px-3" label='نوع فروشگاه' placeholder="نوع فروشگاه خود را مشخص کنید"
                            options={[
                                {value: 1, text: 'فروشگاه تخصصی لوازم عکاسی'},
                                {value: 2, text: 'فروشگاه تخصصی عکاسی آنالوگ'},
                                {value: 3, text: 'فروشگاه شخصی / فروشگاه خانگی'},
                                {value: 4, text: 'فروشگاه مجازی / فروشگاه اینستاگرامی'}
                            ]}
                        />
                        <Input required type="number" name="founded_in_year" id="year" label="سال شروع فعالیت" className="ltr py-2 px-3" min={1320} max={1402}/>
                        <TextArea name="bio" id="bio" label="بیوگرافی فروشگاه" className="p-3"/>
                        <div className="col-span-full flex justify-center">
                            <button className="border-2 border-dashed border-transparent hover:border-x-dark-blue hover:text-x-dark-blue duration-300 text-gray-700 flex flex-row-reverse justify-center items-center gap-2 px-4 py-2 rounded-lg">
                                ذخیره تغییرات
                            </button>
                        </div>
                        {/* <div>
                            <div className="relative">
                                <label htmlFor="username" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">نام کاربری</label>
                                <input defaultValue={shop.username} id="username" type="text" name="username" className="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3" />
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <label htmlFor="phone_number" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">شماره تلفن</label>
                                <input defaultValue={shop.phone_number} id="phone_number" type="phone_number" name="phone_number" className="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3" />
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <label htmlFor="email" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">آدرس ایمیل</label>
                                <input defaultValue={shop.email} id="email" type="email" name="email" className="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3" />
                            </div>
                        </div>
                         */}
                    </Form>
                </Formik>
                <form className="grid md:grid-cols-2 gap-6 my-6 pb-6" action="#">
                    <h2 className="font-semibold text-gray-800 mb-4 h-5 svg-inherit col-span-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
                            <path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,2.968,2.166,5.439,5,5.916v11.084c0,.552,.448,1,1,1s1-.448,1-1V11.916c2.834-.477,5-2.948,5-5.916Zm-6,4c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"/>
                        </svg>
                        موقعیت مکانی فروشگاه
                    </h2>
                    <div>
                        <div className="relative">
                            <label htmlFor="fullname" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">استان محل زندگی</label>
                            <select name="state" id="state" className="w-full bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3">
                                <option value="KHZ">خراسان رضوی</option>
                                <option value="THR">تهران</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <label htmlFor="username" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">شهر یا روستا</label>
                            <select name="state" id="state" className="w-full bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3">
                                <option value="MHD">مشهد</option>
                                <option value="THR">تهران</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <label htmlFor="zip" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">کد پستی</label>
                            <input id="zip" type="zip" name="zip" className="w-full [direction:ltr] text-left bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3" />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <div className="relative">
                            <label htmlFor="address" className="absolute -top-2 right-2 text-xs bg-white rounded-full px-2 text-gray-600">آدرس محل سکونت</label>
                            <textarea id="address" name="address" className="w-3/4 h-32 bg-transparent border border-black/10 rounded-md py-2 pt-3 px-3"></textarea>
                        </div>
                    </div>
                    <div className="col-span-full flex justify-center">
                        <button className="border-2 border-dashed border-transparent hover:border-x-dark-blue hover:text-x-dark-blue duration-300 text-gray-700 flex flex-row-reverse justify-center items-center gap-2 px-4 py-2 rounded-lg">
                            ذخیره تغییرات
                        </button>
                    </div>
                </form>
            </section>
        </section>
    );
}

export {ShopGeneralSetting as Component}