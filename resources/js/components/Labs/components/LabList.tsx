import { FC } from "react";
import LabItem from "./LabItem";
import { LabObject, PageMeta } from "../types";
import ArrowIcon from "../../Icons/ArrowIcon";

interface LabListProps {
    labs: LabObject[]
    pagination?: PageMeta
    setPage: (url: string | null) => void
}
 
function ButtonValue({label}: {label: string}) {
    switch (label) {
        case '&laquo; Previous':
            return <ArrowIcon to="right" size={20} />
        case 'Next &raquo;':
            return <ArrowIcon to="left" size={20} />
        default:
            return <span className="pt-1">{label}</span>
    }
}

const LabList: FC<LabListProps> = ({labs, pagination, setPage}) => {
    if (labs.length == 0) {
        return (
            <h6>هیچ نتیجه ای یافت نشد</h6>
        )
    }
    let paginationsLinks = pagination && pagination.links.filter(x => x.url !== null)
    return (
        <>
            {labs.map(lab => <LabItem key={lab.id} {...lab}/>)}
            {paginationsLinks && paginationsLinks.length > 1 && (
                <div className="col-span-full flex flex-wrap justify-center gap-3 text-gray-800">
                    {paginationsLinks.map(link => {
                        return (
                            <button onClick={() => setPage(link.url)}
                            className={`h-8 w-8 flex items-center rounded-md justify-center ${link.active ? '' : 'border border-black/10 hover:bg-gray-100'}`} disabled={link.active} key={link.label} type="button">
                                <ButtonValue label={link.label}/>
                            </button>
                        )
                    })}
                </div>
            )}
        </>
    );
}
 
export default LabList;