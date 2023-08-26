import axios, {AxiosInstance, CreateAxiosDefaults, Canceler, AxiosRequestConfig} from 'axios'
import { HttpRequestMethodType } from './types';
import HttpResponse from './HttpResponse';

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
    constructor(config?: CreateAxiosDefaults) {
        this.HttpClient = axios.create(config);
        this.HttpRequestMethod = 'get'
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
            data
        }
        return [this.request(options) as Promise<HttpResponse>, source.cancel as Canceler]
    }
    private async request(config: AxiosRequestConfig) {
        try {
            const response = await this.HttpClient.request(config)
            return new HttpResponse(response)
        } catch (error) {
            return new HttpResponse().setErrors(error)
        }
    }
}

export default Request