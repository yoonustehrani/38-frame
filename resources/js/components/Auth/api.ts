import Request from "../../utils/HttpClient/Request";

const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

export function requestSanctumCSRFCookie() {
    return new Request({
        headers: {
            'Accept': 'application/json'
        }
    }).to('/sanctum/csrf-cookie').send()
}

export function requestLogin(data: unknown) {
    return new Request(ApiConfig).to('/auth/login').method('post').send(data)
}