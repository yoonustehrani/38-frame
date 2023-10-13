import { Switch } from "@mui/material";
import { ChangeEvent, FC, useLayoutEffect, useMemo, useRef, useState } from "react";
import CityComboBox from "./components/CityComboBox";
import { LabCategory, ServiceGroup, initialFilters } from "./types";
import { SetFunc } from "./hooks";
import { fetchServices } from "./api";
import ArrowIcon from "../Icons/ArrowIcon";
import CloseButton from "./components/CloseButton";

interface FiltersSideBarProps {
    searchParams: Partial<typeof initialFilters>,
    setParams: SetFunc
}
 
const FiltersSideBar: FC<FiltersSideBarProps> = ({searchParams, setParams}) => {
    const [serviceGroups, setServiceGroups] = useState<ServiceGroup[]>([])
    const [displayForMobile, setDisplay] = useState(false)
    const defaultServices = useMemo(() => searchParams.services, [])
    const sideBarElement = useRef<HTMLElement>(null)
    
    function handleToggle(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.checked && searchParams.services) {
            setParams({
                services: [...searchParams.services, e.target.value]
            })
        } else {
            setParams({
                services: searchParams.services?.filter(x => x !== e.target.value)
            })
        }
    }
    
    useLayoutEffect(() => {
        const [response, cancel] = fetchServices()
        response.then(r => {
            if (! r.hasErrors()) {
                setServiceGroups(r.getContent<ServiceGroup[]>())
            }
        })
        return () => cancel()
    }, [])
    
    return (
        <aside ref={sideBarElement} className={`w-full h-full px-6 md:w-1/5 py-4 md:px-2 md:h-auto bg-white md:bg-transparent md:static overflow-y-auto z-50 md:z-0 md:border-l-2 border-dashed border-x-green shrink-0 flex flex-col gap-4 items-center md:items-start ${displayForMobile ? 'fixed top-0 left-0' : ''}`}>
            {displayForMobile && <CloseButton onClick={() => setDisplay(false)}/>}
            <button onClick={() => setDisplay(true)} className="w-fit flex gap-2 items-center font-bold md:hidden">
                <svg height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m14 24a1 1 0 0 1 -.6-.2l-4-3a1 1 0 0 1 -.4-.8v-5.62l-7.016-7.893a3.9 3.9 0 0 1 2.916-6.487h14.2a3.9 3.9 0 0 1 2.913 6.488l-7.013 7.892v8.62a1 1 0 0 1 -1 1zm-3-4.5 2 1.5v-7a1 1 0 0 1 .253-.664l7.268-8.177a1.9 1.9 0 0 0 -1.421-3.159h-14.2a1.9 1.9 0 0 0 -1.421 3.158l7.269 8.178a1 1 0 0 1 .252.664z"/></svg>
                فیلترها
            </button>
            <div className={`${displayForMobile ? '' : 'hidden'} md:block`}>
                <h5 className="font-bold text-gray-700 text-lg">جستجو بر اساس نام</h5>
                <div className="flex w-64 my-2">
                    <input type="text" onChange={e => setParams({brand: e.target.value})} value={searchParams.brand ?? ''} className="form-input py-1 px-2" />
                </div>
                <p>
                    <label className="cursor-pointer" htmlFor="only-active">{`فقط لابراتوارهای فعال`}</label>
                    <Switch id="only-active" checked={searchParams.onlyActive ?? false} color="warning" onChange={e => setParams({onlyActive: e.target.checked})} />
                </p>
            </div>
            <div className={`${displayForMobile ? '' : 'hidden'} md:block`}>
                <h5 className="font-bold text-gray-700 text-lg mb-3">فیلتر بر اساس موقعیت مکانی</h5>
                <CityComboBox cityId={searchParams.city ? (searchParams.city === -1 ? null : searchParams.city) : null} setCityId={id => setParams({city: id ? Number(id) : -1})}/>
            </div>
            <div className={`${displayForMobile ? '' : 'hidden'} md:block`}>
                <h5 className="font-bold text-gray-700 text-lg">فیلتر بر اساس دسته بندی</h5>
                <select className="form-input w-64 py-1 px-3 mt-3" value={searchParams.category ?? ''} onChange={e => setParams({category: e.target.value})}>
                    <option value="">انتخاب کنید</option>
                    {Object.entries(LabCategory).map(([k, label]) => (
                        <option key={k} value={k}>{label}</option>
                    ))}
                </select>
            </div>
            <div className={`${displayForMobile ? '' : 'hidden'} md:flex flex-col gap-4`}>
                <h5 className="font-bold text-gray-700 text-lg">فیلتر بر اساس خدمات</h5>
                {serviceGroups.length > 0 && serviceGroups.map(group => (
                    <div key={group.id}>
                        <h6 className="text-gray-700">- {group.label}</h6>
                        <div className="flex flex-col gap-3 px-2 py-4">
                            {group.services.map(service => (
                                <div key={service.id} className="flex gap-2 items-center text-sm">
                                    <input className="h-4 w-4 accent-x-green" defaultChecked={defaultServices?.includes(String(service.id))} onChange={handleToggle} value={service.id} type="checkbox" id={`service-group-${service.category_id}-${service.id}`} />
                                    <label htmlFor={`service-group-${service.category_id}-${service.id}`}>{service.title}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
 
export default FiltersSideBar;