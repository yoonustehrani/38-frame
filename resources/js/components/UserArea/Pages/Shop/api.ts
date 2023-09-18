import Request from "../../../../utils/HttpClient/Request"

const ApiConfig = {
    baseURL: window.location.origin + '/api/shops',
    headers: {'Accept': 'application/json'}
}

export const sendShopRegisteringRequest = (data: unknown) => {
    return new Request(ApiConfig).method('post').to('/register').send(data)
}