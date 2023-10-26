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
            <section className="w-full md:px-6 md:py-4 flex gap-8">
                <section className="md:h-24 shadow-sm shadow-gray-400 rounded-md overflow-hidden px-4 py-2 flex flex-col md:flex-row items-center md:items-center justify-between gap-6" style={{ background: grad }}>
                    <img className="w-3/4 md:w-auto md:h-full rounded-full border-4 border-x-yellow/20" src="/images/darkroom.webp" alt="" />
                    <h3 className="text-xl md:text-2xl text-center md:text-right leading-relaxed text-gray-900 font-bold">به سکان ۳۸ فریم خوش آمدید!</h3>
                </section>
                <section></section>
            </section>
        </div>
    );
}

export {Dashboard as Component}