import {ApiClientInterface} from "@/models/api-client/ApiClient.interface";
import itemsApiClient from "@/api-client/live/items";

const apiLiveClient: ApiClientInterface = {
    items: itemsApiClient,
}

export default apiLiveClient;
