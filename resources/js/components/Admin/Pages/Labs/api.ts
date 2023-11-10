import Request from "../../../../utils/HttpClient/Request"

const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

function newRequest() {
    return new Request(ApiConfig)
}

export const sendLabCreationRequest = (data: unknown) => {
    return newRequest().method('post').to('/admin/labs').send(data)
}

export const fetchCategories = () => {
    return newRequest().to('/site-categories?type=service').send()
}

export const fetchLabTypeCategories = () => {
    return newRequest().to('/site-categories?type=lab_category').send()
}

export const fetchServicesByCategoryId = (categoryId: number) => {
    return newRequest().to(`/site-categories?type=service&parent_id=${categoryId}`).send()
}

export const fetchLabs = (query: string = '') => {
    return newRequest().to(`/admin/labs?${query}`).send()
}

export const fetchLabForEdit = (id: string) => {
    return newRequest().to(`/admin/labs/${id}`).send()
}