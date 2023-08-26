export type HttpRequestMethodType = 'get' | 'post';
export const SERVER_FAULT = 'SERVER_FAULT'
export const NETWORK_FAULT = 'NETWORK_FAULT'
export const CONFIG_FAULT = 'CONFIG_FAULT'
export type serverError = 'SERVER_FAULT'
export type networkError = 'NETWORK_FAULT'
export type configError = 'CONFIG_FAULT'
export type errorType = serverError | networkError | configError