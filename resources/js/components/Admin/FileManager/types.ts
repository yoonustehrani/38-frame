export interface File {
    id: number
    name: string
    filename: string
    type: 'image'
    uri: string
    thumbnailUri: string | null
}