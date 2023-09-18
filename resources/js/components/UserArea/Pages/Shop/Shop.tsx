import { FC, useEffect, useLayoutEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

interface ShopProps {
    
}
 
const Shop: FC<ShopProps> = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        navigate('/shop/register')
    }, [])
    return (
        <>فروشگاه</>
    );
}
 
export {Shop as Component};