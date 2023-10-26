import Request from "../../../../utils/HttpClient/Request"

const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

export const sendShopRegisteringRequest = (data: unknown) => {
    return new Request(ApiConfig).method('post').to('/labs/register').send(data)
}

export const fetchCategories = () => {
    return new Request(ApiConfig).to('/site-categories?type=service').send()
}

export const fetchServicesByCategoryId = (categoryId: number) => {
    return new Request(ApiConfig).to(`/service-categorys/${categoryId}/services`).send()
}