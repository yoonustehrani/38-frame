import Request from "../../../../../utils/HttpClient/Request"

const ApiConfig = {
    baseURL: window.location.origin + '/api/shops',
    headers: {'Accept': 'application/json'}
}

export const sendShopAlterRequest = (id: number | string, data: {[key:string]: any}) => {
    let conf = data.avatar ? {
        baseURL: ApiConfig.baseURL,
        headers: {
            // ...ApiConfig.headers,
            "Content-Type": "multipart/form-data"
        }
    } : ApiConfig
    data = {...data, _method: 'PATCH'}
    return new Request(conf).method('post').to(`/${id}`).send(data)
}