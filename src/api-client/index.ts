import {ApiClientInterface} from "@/models/api-client/ApiClient.interface";
import apiMockClient from "@/api-client/mock";
import apiLiveClient from "@/api-client/live";
import * as process from "process";

let env: string = 'mock';

if (process.env && process.env.VUE_APP_API_CLIENT) {
    env = process.env.VUE_APP_API_CLIENT.trim();
}

let apiClient: ApiClientInterface = apiMockClient;
if (env === 'live') {
    apiClient = apiLiveClient;
}

export default apiClient;
