import { FC } from "react";
import useShop from "../../hooks/useShop";

interface ShopProps {
    
}
 
const Shop: FC<ShopProps> = () => {
    const {shop} = useShop()
    if (! shop) return null
    return (
        <>فروشگاه من</>
    );
}
 
export {Shop as Component};