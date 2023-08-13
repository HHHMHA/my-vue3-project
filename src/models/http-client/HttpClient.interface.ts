import {HttpRequestParamsInterface} from "@/models/http-client/HttpRequestParams.interface";

export interface HttpClientInterface {
    get<T>(paramaters: HttpRequestParamsInterface): Promise<T>;
    post<T>(paramaters: HttpRequestParamsInterface): Promise<T>;
}
