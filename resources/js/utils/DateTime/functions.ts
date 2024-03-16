export function persianDateTime(dateTimeString: string) {
    return new Intl.DateTimeFormat('fa-IR', {
        timeStyle: 'short',
        dateStyle: 'medium'
    }).format(new Date(dateTimeString))
}