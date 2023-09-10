import {ItemsApiClientInterface} from "@/models/api-client/items/ItemsApiClient.interface";
import {ItemInterface} from "@/models/items/Item.interface";
import {ItemsApiClientUrlsInterface} from "@/models/api-client/items/ItemsApiClientUrls.interface";
import {HttpClient, HttpRequestParamsInterface} from "@/models/http-client";

export class ItemsApiClientModel implements ItemsApiClientInterface {
    constructor(private readonly urls: ItemsApiClientUrlsInterface) {
    }

    fetchItems(): Promise<ItemInterface[]> {
        return new Promise<ItemInterface[]>((resolve) => {
            const url = this.urls.fetchItems;

            const params: HttpRequestParamsInterface = {
                url,
                requiresToken: false,
            };

            return HttpClient.get<ItemInterface[]>(params);
        });
    }
}
