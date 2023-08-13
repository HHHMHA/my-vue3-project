import axios, {AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";

export interface MockedPromiseFactoryParamsInterface {
    url: string
    requestConfig: InternalAxiosRequestConfig
    statusCode: number
    statusText: string
    data: any
    reject: boolean
}

export const MockedPromiseFactory = (
    params: MockedPromiseFactoryParamsInterface
): Promise<AxiosResponse<string>> => {
    return new Promise<AxiosResponse<string>>((resolve, reject) => {
        setTimeout(() => {
            const response: AxiosResponse = {
                data: params.data,
                status: params.statusCode,
                statusText: params.statusText,
                headers: [],
                config: params.requestConfig,
            }

            if (params.reject) {
                reject(response);
            } else {
                resolve(response);
            }
        }, 100);
    })
}
