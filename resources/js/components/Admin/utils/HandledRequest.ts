import { CreateAxiosDefaults } from "axios";
import { HttpErrorResponse } from "../../../utils/HttpClient/HttpResponse";
import Request from "../../../utils/HttpClient/Request";
import { AuthContextObject } from "../../WebPanel/context/authContext";
const ApiConfig = {
    baseURL: window.location.origin + '/api',
    headers: {'Accept': 'application/json'}
}

const errorHandler = (auth: AuthContextObject, error: HttpErrorResponse) => {
    switch (error.getStatus()) {
        case 401:
            auth.logout()
            break;
        case 403:
            
            break;
        default:
            break;
    }
}

const HandledRequest = (auth: AuthContextObject, config?: CreateAxiosDefaults<any>) => new Request(config ?? ApiConfig, (error: HttpErrorResponse) => {
    errorHandler(auth, error)
})

export default HandledRequest