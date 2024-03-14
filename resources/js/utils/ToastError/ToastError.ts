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
    Object.entries(ErrorObject.errors).map(([key, messages], i) => {
        const min = i == 0 ? 1 : 0;
        for (let index = min; index < messages.length; index++) {
            toastError(messages[index])
        }
    })
}