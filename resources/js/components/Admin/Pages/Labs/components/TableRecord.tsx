import { FC, ReactNode } from "react";

interface TableRecordProps {
    children?: ReactNode
}
 
const TableRecord: FC<TableRecordProps> = ({children}) => {
    return (
        <td className="px-2">
            <div className="flex items-center justify-center">{children}</div>
        </td>
    );
}
 
export default TableRecord;