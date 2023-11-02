import Request from "../../utils/HttpClient/Request"

const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

export const fetchLabs = (search: null|string = null) => {
    return new Request(ApiConfig).to(`labs/${search}`).send();
}

export const fetchCities = (query: string) => {
    return new Request(ApiConfig).to(`cities?query=${query}`).send();
}

export const fetchCity = (id: number | string) => {
    return new Request(ApiConfig).to(`cities/${id}`).send();
}

export const fetchServices = () => {
    return new Request(ApiConfig).to('lab-services').send();
}

export const fetchServiceCategories = () => {
    return new Request(ApiConfig).to('/site-categories?type=lab_category').send()
}