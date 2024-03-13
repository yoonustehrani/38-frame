import { useEffect, useState } from "react";
import Request from "../../../utils/HttpClient/Request";
import { useLocation, useNavigate } from "react-router-dom";

export interface Shop {
    id: number
    brand: string
    bio: string
    category: string
    phone_number: string
    avatar: string
    address: string | null
    address_line: string | null
    founded_in_year: number
    meta: {
        social: {
            instagram: string
            telegram_channel: string
        }
    }
    owner_fullname: string
    owner_national_id: string
}

const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

export const getShop = () => {
    return new Request(ApiConfig).to('/user/shop').send()
}

export default function useShop() {
    const [shop, setShop] = useState<Shop>()
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        let [requestShop, cancelRequest] = getShop()
        requestShop.then(res => {
            if (res.hasErrors()) {
                if (location.pathname !== '/shop/register') {
                    navigate('/shop/register')
                }
                return
            }
            setShop(res.getContent<Shop>())
        })
        return cancelRequest
    }, [])
    return {
        shop,
        setShop
    }
}