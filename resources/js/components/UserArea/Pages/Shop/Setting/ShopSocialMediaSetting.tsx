import { Form, Formik, FormikValues } from "formik";
import Input from "../../../../WebPanel/components/Formik/Input";
import useShop, { Shop } from "../../../hooks/useShop";
import { sendShopAlterRequest } from "./api";
import ToastError from "../../../../../utils/ToastError/ToastError";
import { toast } from "react-toastify";
import InstagramIcon from "../../../../Icons/Social/InstagramIcon";
import TelegramIcon from "../../../../Icons/Social/TelegramIcon";

const ShopSocialMediaSetting = () => {
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
            <section className="w-full lg:w-3/4 border border-black/5 shadow-md rounded-lg py-3 px-5">
                <Formik onSubmit={submitData} initialValues={{ 
                    meta: {
                        social: {
                            instagram: shop.meta.social.instagram,
                            telegram_channel: shop.meta.social.telegram_channel
                        }
                    }
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
                        <Input name="meta[social][instagram]" id="social-instagram" label="صفحه اینستاگرام" className="pb-2 pt-3 px-3 pl-14 text-left [direction:ltr]">
                            <div className="h-full w-10 absolute top-0 left-0 flex items-center">
                                <InstagramIcon />
                            </div>
                        </Input>
                        <Input name="meta[social][telegram_channel]" id="social-telegram-channel" label="کانال تلگرام" className="pb-2 pt-3 px-3 pl-14 text-left [direction:ltr]">
                            <div className="h-full w-10 absolute top-0 left-0 flex items-center">
                                <TelegramIcon />
                            </div>
                        </Input>
                        <div className="col-span-full flex justify-center">
                            <button className="border-2 border-dashed border-transparent hover:border-x-dark-blue hover:text-x-dark-blue duration-300 text-gray-700 flex flex-row-reverse justify-center items-center gap-2 px-4 py-2 rounded-lg">
                                ذخیره تغییرات
                            </button>
                        </div>
                    </Form>
                </Formik>
            </section>
        </section>
    );
}

export {ShopSocialMediaSetting as Component}