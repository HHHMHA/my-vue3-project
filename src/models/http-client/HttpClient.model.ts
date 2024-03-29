import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

import {HttpRequestParamsInterface} from "@/models/http-client/HttpRequestParams.interface";
import {HttpClientInterface} from "@/models/http-client/HttpClient.interface";

export default class HttpClientModel implements HttpClientInterface {
    private getToken(): string {
        const TOKEN_KEY = process.env && process.env.VUE_APP_TOKEN_KEY ? process.env.VUE_APP_TOKEN_KEY : 'myapp-token';
        const token = localStorage.getItem(TOKEN_KEY) || '';
        return token;
    }

    constructor() {
    }

    get<T>(paramaters: HttpRequestParamsInterface): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const {url, requiresToken} = paramaters;

            const options: AxiosRequestConfig = {
                headers: {},
            };

            if (requiresToken) {
                const token = this.getToken();
                options.headers!.RequestVerificationToken = token;
            }

            axios.get(url, options).then((response: AxiosResponse) => {
                resolve(response.data as T);
            }).catch((response: AxiosResponse) => {
                reject(response);
            })
        })
    }

    post<T>(paramaters: HttpRequestParamsInterface): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const {url, requiresToken, payload} = paramaters;

            const options: AxiosRequestConfig = {
                headers: {},
            };

            if (requiresToken) {
                const token = this.getToken();
                options.headers!.RequestVerificationToken = token;
            }

            axios.post(url, payload, options).then((response: AxiosResponse) => {
                resolve(response.data as T);
            }).catch((response: AxiosResponse) => {
                reject(response);
            })
        })
    }

}
