export function toPersianDateTime(dateTimeString: string) {
    return new Intl.DateTimeFormat('fa-IR', {
        timeStyle: 'short',
        dateStyle: 'medium'
    }).format(new Date(dateTimeString))
}