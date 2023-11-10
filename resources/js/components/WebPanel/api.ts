import Request from "../../utils/HttpClient/Request"

export function requestLogout() {
    const [response, cancel] = new Request({
        baseURL: window.location.origin + '/api/auth',
        headers: {'Accept': 'application/json'}
    }).method('post').to('/logout').send()
    return response
}