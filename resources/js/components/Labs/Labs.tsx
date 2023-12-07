import { FC, useEffect, useLayoutEffect, useState } from "react";
import { useBrowserSearchParam, useBrowserSearchParamsBulk } from "./hooks";
import { LabObject, PageMeta } from "./types";
import { fetchLabs } from "./api";
import LoadingLabItem from "./LoadingLabItem";
import FiltersSideBar from "./FiltersSideBar";
import LabList from "./components/LabList";

interface LabsProps {
    
}

const Labs: FC<LabsProps> = () => {
    const [params, setParams, prepareQuery] = useBrowserSearchParamsBulk()
    const [loading, setLoading] = useState(true)
    const [labs, setLabs] = useState<LabObject[]>([])
    const [pagination, setPagination] = useState<PageMeta>()
    const [page, setPage] = useBrowserSearchParam<number>('page', 1)
    useLayoutEffect(() => {
        let query = prepareQuery()
        if (page && page > 1) {
            query += `page=${page}`
        }
        const [response, cancel] = fetchLabs(`?${query}`)
        ! loading && setLoading(true)
        setTimeout(() => {
            response.then(r => {
                if (! r.hasErrors()) {
                    let res = r.getContent<{data: LabObject[], meta: PageMeta}>()
                    setLabs(res.data)
                    setPagination(res.meta)
                    setLoading(false)
                }
            })
        }, 100);
        return () => cancel()
    }, [location.search])

    useEffect(() => {
        if (page != 1) {
            setPage(1)
        }
    }, [params])
    return (
        <>
            <FiltersSideBar searchParams={params} setParams={setParams}/>
            <div className="md:grow w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-6 py-4">
                {loading ? [...Array(8)].map((a, i) => <LoadingLabItem key={i} />) : <LabList labs={labs} setPage={(url: string | null) => {
                    if(! url) return;
                    const page = /.+\?page\=(\d)/.exec(url) as RegExpExecArray
                    setPage(Number(page[1]))
                }} pagination={pagination}/>}
            </div>
        </>
    );
}
 
export default Labs;