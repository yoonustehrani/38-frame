import Request from "../../../../utils/HttpClient/Request";

const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

export const fetchAds = () => {
    return new Request(ApiConfig).to('/ads').send()
}

export const fetchSiteCategories = () => {
    return new Request(ApiConfig).to('/site-categories').send()
}