import { useEffect, useState } from "react"
import useShop from "../../../hooks/useShop"
import { getShopMerchandise } from "../api"
import ToastError from "../../../../../utils/ToastError/ToastError"
import { Link } from "react-router-dom"
import { MerchandiseItem } from "./types"
import { useGroupActionList } from "../../../../../hooks/tableHooks"
import TableRecord from "../../../../TableRecord"
import { persianDateTime } from "../../../../../utils/DateTime/functions"

function Merchandise() {
    const {shop} = useShop()
    const [merchandise, setMerchandise] = useState<MerchandiseItem[]>()
    // const [loading, setLoading] = useState(true)
    const groupedList = useGroupActionList([] as MerchandiseItem[])
    useEffect(() => {
        if (shop) {
            const [request, cancel] = getShopMerchandise(shop.id)
            request.then(res => {
                if (res.hasErrors()) {
                    return ToastError(res.getErrors())
                }
                console.log(res.getContent());
                
                setMerchandise(res.getContent())
            })
            return cancel
        }
    }, [shop])
    if (typeof merchandise === 'undefined') {
        return (
            <>در حال لود کردن ...</>
        )
    }
    return (
        <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
                <div className="flex items-center justify-between">
                    <p tabIndex={0} className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">آیتم های فروشگاه</p>
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
                    <Link to="/shop/merchandise/create" className="focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-emerald-700 hover:bg-emerald-600 focus:outline-none rounded">
                        <p className="text-sm font-medium leading-none text-white">افزودن آیتم به فروشگاه</p>
                    </Link>
                </div>
                <div className="mt-7 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr>
                                <th className="py-2">
                                    <div className="flex items-center justify-center">
                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input onChange={(e) => {
                                                if (e.target.checked) {
                                                    groupedList.includeAll()
                                                } else {
                                                    groupedList.excludeAll()
                                                }
                                            }} placeholder="checkbox" type="checkbox" className="accent-indigo-700 checkbox absolute cursor-pointer w-full h-full" />
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
                        {merchandise.map((item, index) => (
                            <tbody key={item.id}>
                                <tr tabIndex={0} className="focus:outline-none h-16 border border-gray-100 rounded">
                                    <TableRecord>
                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input onChange={e => groupedList.toggle(item.id)} checked={groupedList.items.includes(item.id)} placeholder="checkbox" type="checkbox" className="accent-indigo-700 checkbox absolute cursor-pointer w-full h-full" />
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
                                        {item.published_at == null ? (
                                            <p className={`${item.status == 'rejected' ? 'text-red-700 bg-red-300' : 'text-yellow-700 bg-yellow-300'} text-xs leading-none px-2 py-1 rounded-full`}>
                                                {item.status == 'rejected' ? `رد شده` : `در انتظار تایید`}
                                            </p>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center gap-2 py-2">
                                                <p className="text-xs leading-none text-emerald-700 bg-emerald-300 px-2 py-1 rounded-full w-fit">تایید شده</p>
                                                <p className="text-xs">در {persianDateTime(item.published_at)}</p>
                                            </div>
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

export {Merchandise as Component}