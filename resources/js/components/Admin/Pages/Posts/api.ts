import Request from "../../../../utils/HttpClient/Request"

const ApiConfig = {
    baseURL: window.location.origin + '/api/posts',
    headers: {'Accept': 'application/json'}
}

function newRequest() {
    return new Request(ApiConfig)
}

export const fetchPosts = () => {
    return newRequest().to('/?limit=8').send()
}