import { AxiosError, AxiosResponse } from 'axios';
import {errorType, SERVER_FAULT, NETWORK_FAULT} from './types';

export interface ErrorObject {
    message: string
    errors: {[key: string]: string[]}
}

export class HttpErrorResponse
{
    statusCode: number;
    response: unknown;
    typeOfError: errorType
    constructor(errType: errorType, errData: unknown, errStatus: number) {
        this.statusCode = errStatus
        this.response = errData
        this.typeOfError = errType
    }
    getStatus() {
        return this.statusCode ?? null
    }
    getResponse() {
        return this.response ?? null
    }
}

class HttpResponse
{
    ErrorResponse: null | HttpErrorResponse;
    returnedResponse: unknown
    constructor(response?: AxiosResponse) {
        this.ErrorResponse = null;
        this.returnedResponse = response?.data
    }
    public setErrors(error: any): HttpResponse {
        if (error instanceof AxiosError) {
            if (error.response) {
                // error status code >= 400
                let {data, status} = error.response
                this.ErrorResponse = new HttpErrorResponse(SERVER_FAULT, data, status)
            } else if (error.request) {
                // let e = error.request as XMLHttpRequest
                // console.log(error);
                
                this.ErrorResponse = new HttpErrorResponse(NETWORK_FAULT, {message: 'Connection Interrupted'}, 999)
            } else {
                let { message } = error
                this.ErrorResponse = new HttpErrorResponse(NETWORK_FAULT, {message}, 998)
            }
            return this
        }
        this.ErrorResponse = new HttpErrorResponse(NETWORK_FAULT, {message: 'Unhandled Error'}, 1000)
        return this
    }
    public setResponse(data: unknown): HttpResponse {
        this.returnedResponse = data
        return this
    }
    public getContent<T>() {
        return this.returnedResponse as T
    }
    public hasErrors(): boolean {
        return this.ErrorResponse instanceof HttpErrorResponse
    }
    public getErrorObject() {
        return this.ErrorResponse
    }
    public getErrors(): null | ErrorObject {
        return this.ErrorResponse?.getResponse() as ErrorObject
    }
}

export default HttpResponse