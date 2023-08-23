import { FC } from "react";

interface ArrowIconProps {
    to: 'left' | 'right'
    size?: number
    className?: string
}
 
const ArrowIcon: FC<ArrowIconProps> = ({to, size = 512, className = ''}) => {
    return (
        <svg className={className} height={size} viewBox="0 0 64 64" width={size} xmlns="http://www.w3.org/2000/svg" data-name={`arrow to the ${to}`}>
            {to === 'right' ? (
                <path d="m50.22 21.06-1.42 1.41 8.78 8.78h-51.59v2h51.59l-8.78 8.78 1.42 1.41 11.19-11.19z"/>
            ) : (
                <path d="m59.99 31.25h-51.58l8.78-8.78-1.42-1.41-11.19 11.19 11.19 11.19 1.42-1.41-8.78-8.78h51.58z"/>
            )}
        </svg>
    );
}
 
export default ArrowIcon;