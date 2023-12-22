export type BlogPost = {
    id: number,
    title: string
    description: string
    avatar: {
        uri: string
        thumbnailUri: string
    },
    url: string
    author: {
        username: string
        url: string
        avatar: string
    }
    views: number
}