import { FC } from "react";
import { StarRatingAmount } from "../types";

interface StarsProps {
    amount: StarRatingAmount
}
 
const Stars: FC<StarsProps> = ({amount}) => {
    return (
        <div className="flex flex-row-reverse gap-1">
            {[1,2,3,4,5].map(n => (
                <span key={n} className={`star ${n <= amount ? 'full' : ''}`}></span>
            ))}
            {/* <span className="star full"></span>
            <span className="star full"></span>
            <span className="star"></span>
            <span className="star"></span> */}
        </div>
    );
}
 
export default Stars;