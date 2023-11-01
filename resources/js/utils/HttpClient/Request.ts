import axios, {AxiosInstance, CreateAxiosDefaults, Canceler, AxiosRequestConfig} from 'axios'
import { HttpRequestMethodType } from './types';
import HttpResponse, { HttpErrorResponse } from './HttpResponse';

/**
 * Creates a new Request instance
 * @class
 * @classdesc Offers a 3-step HttpRequest client
 */
class Request
{
    HttpClient: AxiosInstance;
    HttpRequestMethod: HttpRequestMethodType;
    targetUrl: undefined | string;
    ErrorHandler: undefined | ((errorResponse: HttpErrorResponse) => void)
    constructor(config?: CreateAxiosDefaults, ErrorHandler?: (errorResponse: HttpErrorResponse) => void) {
        this.HttpClient = axios.create(config);
        this.HttpRequestMethod = 'get'
        this.ErrorHandler = ErrorHandler
    }
    /**
     * set HTTP Request method
     * @param {string} method GET or POST
     * @returns {Request} The very instance of Request class
     */
    public method(method: HttpRequestMethodType): Request {
        this.HttpRequestMethod = method
        return this
    }
    /**
     * Target URL to send the request to
     * @param {string} url
     */
    public to(url: string): Request {
        this.targetUrl = url
        return this
    }

    /**
     * send
     * @param {any} data the data to accompany the request available in GET and POST
     * @returns {Array} [HttpResponse, Canceler]
     */
    public send<T>(data?: T): [Promise<HttpResponse>, Canceler] {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const options = {
            url: this.targetUrl,
            method: this.HttpRequestMethod,
            cancelToken: source.token,
            onDownloadProgress: progressEvent => {
                console.log('download');
                console.log(progressEvent);
            },
            onUploadProgress: progressEvent => {
                console.log('upload');
                console.log(progressEvent);
            },
            data
        } as AxiosRequestConfig
        return [this.request(options) as Promise<HttpResponse>, source.cancel as Canceler]
    }
    private async request(config: AxiosRequestConfig) {
        try {
            const response = await this.HttpClient.request(config)
            return new HttpResponse(response)
        } catch (error) {
            const response = new HttpResponse().setErrors(error)
            let errObject = response.getErrorObject()
            if (this.ErrorHandler && errObject) {
                this.ErrorHandler(errObject)
            }
            return response
        }
    }
}

export default Request