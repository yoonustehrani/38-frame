import Request from "../../../../utils/HttpClient/Request"

const ApiConfig = {
    baseURL: window.location.origin + '/api/shops',
    headers: {'Accept': 'application/json'}
}

export const sendShopRegisteringRequest = (data: unknown) => {
    return new Request(ApiConfig).method('post').to('/').send(data)
}

export const getShopMerchandise = (shopId: string|number) => {
    return new Request(ApiConfig).method('get').to(`/${shopId}/merchandise`).send()
}

export const sendMerchandiseStoreRequest = (shopId: number|string, data: {[key:string]: any}) => {
    return new Request({
        baseURL: ApiConfig.baseURL,
        headers: {
            ...ApiConfig.headers,
            "Content-Type": "multipart/form-data"
        }
    }).method('post').to(`/${shopId}/merchandise`).send(data)
}

export const getMerchandiseCategories = () => {
    return new Request({
        baseURL: window.location.origin + '/api',
        headers: {'Accept': 'application/json'}
    }).to('/site-categories').send()
}