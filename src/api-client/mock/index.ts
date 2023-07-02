import {ApiClientInterface} from "@/models/api-client/ApiClient.interface";
import itemsApiClient from "@/api-client/mock/items";

const apiMockClient: ApiClientInterface = {
    items: itemsApiClient,
}

export default apiMockClient;
