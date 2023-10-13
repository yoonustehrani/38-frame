import { FC } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Request from "../../../utils/HttpClient/Request";

interface DashboardProps {
    
}
const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

async function loader() {
    const [res] = new Request(ApiConfig).to('/user/shop').send()
    let shop = null
    try {
        const response = await res
        if (! response.hasErrors()) {
            shop = response.getContent()
        }
    } catch (error) {}
    return {shop}
}

const Dashboard: FC<DashboardProps> = () => {
    const grad = 'linear-gradient(to left bottom, rgba(167,160,149,0.1) 0%, rgba(193,184,172,0.4) 100%)';
    const style2 = {
        background: 'linear-gradient(to left bottom, rgba(238,215,217,1) 0%, rgba(235,199,199,1) 100%)'
    }
    let dashboardData = useLoaderData() as {shop: null | {}}
    return (
        <div>
            <section className="w-full md:px-6 md:py-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="md:h-72 shadow-sm shadow-gray-400 rounded-md overflow-hidden px-4 py-3 flex flex-col-reverse md:flex-row items-center md:items-start justify-between" style={{ background: grad }}>
                    <div className="py-2 px-3 flex flex-col items-center md:items-start justify-center gap-4">
                        <h3 className="text-2xl md:text-3xl text-center md:text-right leading-relaxed text-gray-900 font-bold">معرفی رایگان برند تاریکخانه و لابراتوار شما</h3>
                        <p className="text-gray-700 font-bold text-lg text-justify">
                            <span>خدمات تاریکخانه خود را آنلاین ارائه دهید!</span>
                            <br />
                            <span className="text-base font-thin">سفارش ها را آنلاین دریافت کنید و فایل ها را آنلاین به مشتریان تان تحویل دهید.</span>
                        </p>
                        {/* <ArrowIcon className="inline-block" to="left" size={40}/> */}
                        <Link to="/lab/register" className="text-lg duration-300 text-gray-800 bg-zinc-300 py-1 px-3 rounded-md border border-b-4 border-b-zinc-500/60 w-fit">احداث تاریکخانه آنلاین</Link>
                    </div>
                    <img className="w-3/4 md:w-auto md:h-full rounded-full border-4 border-x-yellow/20" src="/images/darkroom.webp" alt="" />
                </section>
                {dashboardData.shop === null && (
                    <section className="md:h-72 shadow-sm shadow-black/30 rounded-md overflow-hidden md:pr-4 flex flex-col-reverse md:flex-row md:justify-between gap-0 md:gap-2" style={style2}>
                        <div className="py-4 md:py-2 px-4 md:px-0 flex flex-col items-center md:items-start text-center md:text-start justify-center gap-4 border-t-4 border-red-800/70 md:border-none">
                            <h3 className="text-2xl md:text-3xl leading-relaxed text-gray-900 font-bold">فروشگاه آنالوگ خودت رو در ۳۸فریم بساز!</h3>
                            <p className="text-gray-700 font-bold text-base md:text-lg">
                                <span>خدمات تاریکخانه خود را آنلاین ارائه دهید!</span>
                                <br />
                                <span className="text-base font-thin">سفارش ها را آنلاین دریافت کنید و فایل ها را آنلاین به مشتریان تان تحویل دهید.</span>
                            </p>
                            {/* <ArrowIcon className="inline-block" to="left" size={40}/> */}
                            <Link to="/shop/register" className="text-lg duration-300 text-black bg-rose-400 py-1 px-3 rounded-md border border-b-4 border-transparent border-b-rose-800/50 w-fit">ایجاد فروشگاه</Link>
                        </div>
                        <div className="w-full h-36 md:w-auto md:h-full flex justify-center items-center overflow-hidden">
                            <img className="w-full md:w-auto md:h-full md:rounded-r-full" src="/images/close-up-cameras-lying-near-film.jpg" alt="" />
                        </div>
                    </section>
                )}
                <section></section>
            </section>
        </div>
    );
}

export {Dashboard as Component, loader}