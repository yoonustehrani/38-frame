import { toast } from "react-toastify";
import { ErrorObject } from "../HttpClient/HttpResponse";

function toastError(message: string) {
    toast.error(message, {
        position: toast.POSITION.TOP_LEFT
    })
}

export default function ToastError(ErrorObject: ErrorObject | null) {
    if (! ErrorObject) {
        return;
    }
    toastError(ErrorObject.message)
    Object.entries(ErrorObject.errors).map(([key, messages]) => {
        messages.forEach(m => m != ErrorObject.message && toastError(m))
    })
}