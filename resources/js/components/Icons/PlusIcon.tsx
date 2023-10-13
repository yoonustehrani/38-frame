import { FC } from "react";

interface IconProps {
    size?: number
    color?: string
}
 
const PlusIcon: FC<IconProps> = ({size = 50, color = '#000000'}) => {
    return (
        <svg height={size} width={size} fill={color} version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 512 512" className="inline plus-icon-svg-props">
            <g>
                <g>
                    <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
                        v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
                </g>
            </g>
        </svg>
    );
}
 
export default PlusIcon;