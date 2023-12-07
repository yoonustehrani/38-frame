import { FC, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchLabs } from "../api";
import TableRecord from "./TableRecord";

interface LabsTableProps {
    
}

function persianDateTime(dateTimeString: string) {
    return new Intl.DateTimeFormat('fa-IR', {
        timeStyle: 'short',
        dateStyle: 'medium'
    }).format(new Date(dateTimeString))
}

interface LabItem {
    id: number
    title: string
    created_at: string
    updated_at: string,
    verified_at: string | null 
}

const LabsTable: FC<LabsTableProps> = () => {
    const [labItems, setLabItems] = useState<LabItem[]>([])
    const [loading, setLoading] = useState(true)
    useLayoutEffect(() => {
        const [response, cancel] = fetchLabs()
        response.then(r => {
            if (! r.hasErrors()) {
                setLoading(false)
                setLabItems(r.getContent<LabItem[]>())
            }
        })
    }, [])
    if (loading) {
        return <p>{'در حال بارگیری ...'}</p>;
    }
    if (labItems.length === 0) {
        return (
            <div className="flex items-center gap-4">
                <p>{'موردی برای نمایش وجود ندارد'}</p>
                <Link to="/labs/create" className="focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-emerald-700 hover:bg-emerald-600 focus:outline-none rounded">
                    <p className="text-sm font-medium leading-none text-white">افزودن لابراتوار</p>
                </Link>
            </div>
        );
    }
    return (
        <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
                <div className="flex items-center justify-between">
                    <p tabIndex={0} className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">لابراتوار ها</p>
                    <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                        <p>مرتب سازی بر اساس:</p>
                        <select aria-label="select" className="focus:text-emerald-600 focus:outline-none bg-transparent ml-1">
                            <option className="text-sm text-emerald-800">جدیدترین</option>
                            <option className="text-sm text-emerald-800">قدیمی ترین</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                <div className="sm:flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <a className="rounded-md focus:outline-none focus:ring-2  focus:bg-emerald-50 focus:ring-emerald-800">
                            <div className="py-2 px-3 bg-emerald-100 text-emerald-700 rounded-md">
                                <p>همه</p>
                            </div>
                        </a>
                        <a className="rounded-md focus:outline-none focus:ring-2 focus:bg-emerald-50 focus:ring-emerald-800">
                            <div className="py-2 px-3 text-gray-600 hover:text-emerald-700 hover:bg-emerald-100 rounded-md ">
                                <p>تایید شده</p>
                            </div>
                        </a>
                        <a className="rounded-md focus:outline-none focus:ring-2 focus:bg-emerald-50 focus:ring-emerald-800">
                            <div className="py-2 px-3 text-gray-600 hover:text-emerald-700 hover:bg-emerald-100 rounded-md ">
                                <p>در انتظار تایید</p>
                            </div>
                        </a>
                    </div>
                    <Link to="/labs/create" className="focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-emerald-700 hover:bg-emerald-600 focus:outline-none rounded">
                        <p className="text-sm font-medium leading-none text-white">افزودن لابراتوار</p>
                    </Link>
                </div>
                <div className="mt-7 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr>
                                <th className="py-2">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input placeholder="checkbox" type="checkbox" className="accent-indigo-700 checkbox absolute cursor-pointer w-full h-full" />
                                        </div>
                                    </div>
                                </th>
                                <th className="py-2">#</th>
                                <th className="py-2">عنوان</th>
                                <th className="py-2">تاریخ ثبت</th>
                                <th className="py-2">آخرین ویرایش</th>
                                <th className="py-2">تاییدیه</th>
                                <th className="py-2">جزئیات</th>
                                <th className="py-2">کنترل</th>
                            </tr>
                        </thead>
                        {labItems.map((item, index) => (
                            <tbody key={item.id}>
                                <tr tabIndex={0} className="focus:outline-none h-16 border border-gray-100 rounded">
                                    <TableRecord>
                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input placeholder="checkbox" type="checkbox" className="accent-indigo-700 checkbox absolute cursor-pointer w-full h-full" />
                                        </div>
                                    </TableRecord>
                                    <TableRecord>{index + 1}</TableRecord>
                                    <TableRecord>
                                        <p className="text-base font-medium leading-none text-gray-700">{item.title}</p>
                                    </TableRecord>
                                    <TableRecord>
                                        <p className="text-sm leading-none text-gray-600">{persianDateTime(item.created_at)}</p>
                                    </TableRecord>
                                    <TableRecord>
                                        <p className="text-sm leading-none text-gray-600">{persianDateTime(item.updated_at)}</p>
                                    </TableRecord>
                                    <TableRecord>
                                        {item.verified_at == null ? (
                                            <p className="text-xs leading-none text-yellow-700 bg-yellow-300 px-2 py-1 rounded-full">در انتظار تایید</p>
                                        ) : (
                                            <p className="text-xs leading-none text-emerald-700 bg-emerald-300 px-2 py-1 rounded-full">تایید شده</p>
                                        )}
                                    </TableRecord>
                                    <td className="px-2">
                                        <div className="flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            <p className="text-sm leading-none text-gray-600 ml-2">0</p>
                                        </div>
                                    </td>
                                    <TableRecord>
                                        <Link to={`/labs/${item.id}/edit`} className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">ویرایش</Link>
                                    </TableRecord>
                                </tr>
                                <tr className="h-3"></tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}
 
export default LabsTable;