import { FC } from "react";

interface ActiveBadgeProps {
    active?: boolean
}
 
const ActiveBadge: FC<ActiveBadgeProps> = ({active = true}) => {
    let dependingClass = active ? 'bg-emerald-300/50 text-emerald-900' : 'bg-red-400/50 text-red-800'
    return (
        <span className={`absolute top-2 left-3 font-bold  px-3 rounded-full ${dependingClass}`}>{active ? 'فعال' : 'غیرفعال'}</span>
    );
}
 
export default ActiveBadge;