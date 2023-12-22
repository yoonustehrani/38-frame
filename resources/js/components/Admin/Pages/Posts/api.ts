import Request from "../../../../utils/HttpClient/Request"

const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

function newRequest() {
    return new Request(ApiConfig)
}

export const fetchPosts = () => {
    return newRequest().to('/posts/?limit=8').send()
}

export const fetchPost = (id: number | string) => {
    return newRequest().to(`/posts/${id}`).send()
}

export const editPost = (id: number, data: any) => {
    return newRequest().to(`/posts/${id}`).method('patch').send(data)
}

export const fetchCategories = () => {
    return newRequest().to('/site-categories/?type=blog-post')
}

export const createCategory = (data: any) => {
    return newRequest().to('/site-categories/').method('post').send(data)
}

export const createPost = (data: any) => {
    return newRequest().to('/posts/').method('post').send(data)
}