export type MerchandiseStatus = 'verified' | 'awaiting confirmation' | 'rejected'

export interface MerchandiseItem
{
    id: number
    title: string
    created_at: string
    updated_at: string
    published_at: string|null
    status: MerchandiseStatus
}