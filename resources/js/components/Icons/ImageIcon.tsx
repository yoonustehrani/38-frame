import { FC } from "react";
import { IconProps } from "./types";
 
const ImageIcon: FC<IconProps> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path d="M19.14,21.75H4.86a2.61,2.61,0,0,1-2.61-2.61V4.86A2.61,2.61,0,0,1,4.86,2.25H19.14a2.61,2.61,0,0,1,2.61,2.61V19.14A2.61,2.61,0,0,1,19.14,21.75ZM4.86,3.75A1.11,1.11,0,0,0,3.75,4.86V19.14a1.11,1.11,0,0,0,1.11,1.11H19.14a1.11,1.11,0,0,0,1.11-1.11V4.86a1.11,1.11,0,0,0-1.11-1.11Z"/><path d="M3,18.81a.76.76,0,0,1-.57-.26.75.75,0,0,1,.09-1.06l5.12-4.32a2,2,0,0,1,2.7.11l2.43,2.43a.5.5,0,0,0,.65,0L15.78,14a2,2,0,0,1,2.44,0l3.25,2.59a.75.75,0,1,1-.94,1.18l-3.24-2.6a.5.5,0,0,0-.61,0L14.32,17a2,2,0,0,1-2.61-.18L9.28,14.34a.5.5,0,0,0-.67,0L3.48,18.64A.72.72,0,0,1,3,18.81Z"/><path d="M15,11.75A2.75,2.75,0,1,1,17.75,9,2.75,2.75,0,0,1,15,11.75Zm0-4A1.25,1.25,0,1,0,16.25,9,1.25,1.25,0,0,0,15,7.75Z"/></svg>
    );
}
 
export default ImageIcon;