import Request from "../../utils/HttpClient/Request"

const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

function newRequest() {
    return new Request(ApiConfig)
}

export const fetchMenu = (key: string) => {
    return newRequest().to(`/menus/${key}`).send()
}