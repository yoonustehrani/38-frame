export interface socialMediaObject {
    instagram: string,
    youtube: string,
    telegram_channel: string,
    telegram_account: string
}

export const socialMediaActionTypes = {
    INSTAGRAM: 'instagram',
    YOUTUBE: 'youtube',
    TELEGRAM_CHANNEL: 'telegram_channel',
    TELEGRAM_ACCOUNT: 'telegram_account',
} as const

export type socialMediaNames = typeof socialMediaActionTypes[keyof typeof socialMediaActionTypes]

export interface socialMediaReducerAction {
    type: 'SET_SOCIAL',
    payload: {
        [key in socialMediaNames]?: string
    }
}