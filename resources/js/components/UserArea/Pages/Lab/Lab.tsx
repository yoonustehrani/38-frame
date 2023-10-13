import { FC, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

interface LabProps {
    
}
 
const Lab: FC<LabProps> = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        navigate('/lab/register')
    }, [])
    return (
        <>فروشگاه</>
    );
}
 
export {Lab as Component};