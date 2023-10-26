import { FC } from "react";
import BreadCrumb, { BreadCrumbItem } from "../../../WebPanel/components/BreadCrumb";
import { Link } from "react-router-dom";
import PlusIcon from "../../../Icons/PlusIcon";
 
const Labs: FC = () => {
    return (
        <section>
            <h1 className="font-bold text-2xl">مدیریت لابراتوار ها</h1>
            <BreadCrumb>
                <BreadCrumbItem link="/">پنل مدیریت</BreadCrumbItem>
                <BreadCrumbItem>لیست لابراتوار ها</BreadCrumbItem>
            </BreadCrumb>
            <div className="w-full mt-6">
                {/* border border-black  */}
                <Link className="py-1 rounded-md px-2 flex justify-center items-center w-fit gap-2 text-gray-800 fill-gray-800" to="/labs/create">
                    <span>افزودن</span>
                    <svg className="fill-inherit" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z"/></svg>
                </Link>
            </div>
        </section>
    );
}
 
export {Labs as Component};