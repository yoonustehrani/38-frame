import Request from "../../../utils/HttpClient/Request"

const ApiConfig = {
    baseURL: window.location.origin + '/api/files',
    headers: {'Accept': 'application/json'}
}

function newRequest() {
    return new Request(ApiConfig)
}

export const fetchFiles = (query?: string) => {
    return newRequest().to(`/?${query ?? ''}`).send()
}

export const uploadFiles = (data: any) => {
    return (
        new Request({...ApiConfig, headers: {...ApiConfig.headers, "Content-Type": "multipart/form-data" }})
    ).to('/').method('post').send(data)
}