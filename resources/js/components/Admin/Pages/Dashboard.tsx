import { FC } from "react";
import { Link } from "react-router-dom";

interface DashboardProps {
    
}
const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

const Dashboard: FC<DashboardProps> = () => {
    const grad = 'linear-gradient(to left bottom, rgba(167,160,149,0.1) 0%, rgba(193,184,172,0.4) 100%)';
    // const style2 = {
    //     background: 'linear-gradient(to left bottom, rgba(238,215,217,1) 0%, rgba(235,199,199,1) 100%)'
    // }
    return (
        <div>
            <section className="w-full md:px-6 md:py-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="md:h-72 shadow-sm shadow-gray-400 rounded-md overflow-hidden px-4 py-3 flex flex-col-reverse md:flex-row items-center md:items-start justify-between" style={{ background: grad }}>
                    <div className="py-2 px-3 flex flex-col items-center md:items-start justify-center gap-4">
                        <h3 className="text-2xl md:text-3xl text-center md:text-right leading-relaxed text-gray-900 font-bold">به سکان ۳۸ فریم خوش آمدید.!</h3>
                        <p className="text-gray-700 font-bold text-lg text-justify">
                            <span></span>
                            <br />
                            <span className="text-base font-thin">سفارش ها را آنلاین دریافت کنید و فایل ها را آنلاین به مشتریان تان تحویل دهید.</span>
                        </p>
                        {/* <ArrowIcon className="inline-block" to="left" size={40}/> */}
                        <Link to="/lab/register" className="text-lg duration-300 text-gray-800 bg-zinc-300 py-1 px-3 rounded-md border border-b-4 border-b-zinc-500/60 w-fit">احداث تاریکخانه آنلاین</Link>
                    </div>
                    <img className="w-3/4 md:w-auto md:h-full rounded-full border-4 border-x-yellow/20" src="/images/darkroom.webp" alt="" />
                </section>
                <section></section>
            </section>
        </div>
    );
}

export {Dashboard as Component}