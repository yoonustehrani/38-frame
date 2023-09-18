import Request from "../../../../utils/HttpClient/Request"

const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

export const setUserSocialMediaSettings = (data: FormData) => {
    return new Request(ApiConfig).method('post').to('/user/settings/social').send(data)
}