import { FC, ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { useGroupActionList } from "../../../../../../hooks/tableHooks";
import groupActionsContext from "./groupActionsContext";


type ItemWithId = {id: number }

interface DBRecordObject extends ItemWithId {
    [key: string]: any
}


interface DataTableProps {
    loading: boolean
    items: DBRecordObject[],
    children: ReactNode,
    newItem: {
        link: string
        title?: string
    },
    title: string
}
 
const DataTable: FC<DataTableProps> = ({loading, title, items, children, newItem}) => {
    const groupedList = useGroupActionList(items)
    
    if (loading) {
        return <p>{'در حال بارگیری ...'}</p>;
    }
    
    if (items.length === 0) {
        return (
            <div className="flex items-center gap-4">
                <p>{'موردی برای نمایش وجود ندارد'}.</p>
                <Link to={newItem.link} className="focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-2 py-2 bg-emerald-700 hover:bg-emerald-600 focus:outline-none rounded">
                    <p className="text-sm font-medium leading-none text-white">افزودن{newItem.title ? ` ${newItem.title}` : ''}</p>
                </Link>
            </div>
        );
    }
    return (
        <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
                <div className="flex items-center justify-between">
                    <p tabIndex={0} className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">{title}</p>
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
                        {/* <a className="rounded-md focus:outline-none focus:ring-2 focus:bg-emerald-50 focus:ring-emerald-800">
                            <div className="py-2 px-3 text-gray-600 hover:text-emerald-700 hover:bg-emerald-100 rounded-md ">
                                <p>تایید شده</p>
                            </div>
                        </a>
                        <a className="rounded-md focus:outline-none focus:ring-2 focus:bg-emerald-50 focus:ring-emerald-800">
                            <div className="py-2 px-3 text-gray-600 hover:text-emerald-700 hover:bg-emerald-100 rounded-md ">
                                <p>در انتظار تایید</p>
                            </div>
                        </a> */}
                    </div>
                    <Link to={newItem.link} className="focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-emerald-700 hover:bg-emerald-600 focus:outline-none rounded">
                        <p className="text-sm font-medium leading-none text-white">افزودن{newItem.title ? ` ${newItem.title}` : ''}</p>
                    </Link>
                </div>
                <div className="mt-7 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <groupActionsContext.Provider value={groupedList}>
                            {children}
                        </groupActionsContext.Provider>
                    </table>
                </div>
            </div>
        </div>
    )
}


interface TheadProps {
    columns: string[]
}

export const Thead: FC<TheadProps> = ({columns}) => {
    const groupActions = useContext(groupActionsContext)
    // console.log(groupActions.items);
    
    return (
        <thead>
            <tr>
                <th className="py-2">
                    <div className="flex items-center justify-center">
                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input onChange={(e) => {
                            if (e.target.checked) {
                                groupActions.includeAll()
                            } else {
                                groupActions.excludeAll()
                            }
                        }} placeholder="checkbox" type="checkbox" className="accent-indigo-700 checkbox absolute cursor-pointer w-full h-full" />
                        </div>
                    </div>
                </th>
                <th className="py-2">#</th>
                {columns.map(col => (
                    <th key={col} className="py-2">{col}</th>
                ))}
            </tr>
        </thead>
    )
}





export default DataTable;