import {ItemsApiClientInterface} from "@/models/api-client/items/ItemsApiClient.interface";
import {ItemInterface} from "@/models/items/Item.interface";
import {ItemsApiClientUrlsInterface} from "@/models/api-client/items/ItemsApiClientUrls.interface";
import axios, {AxiosRequestConfig} from "axios";

export class ItemsApiClientModel implements ItemsApiClientInterface {
    constructor(private readonly urls: ItemsApiClientUrlsInterface) {
    }

    fetchItems(): Promise<ItemInterface[]> {
        return new Promise<ItemInterface[]>((resolve) => {
            const url = this.urls.fetchItems;

            const options: AxiosRequestConfig = {
                headers: {

                }
            };

            axios.get(url, options)
                .then(response => {
                    resolve(response.data as ItemInterface[]);
                })
                .catch(error => {
                    console.error('ItemsApiClient: HttpClient: Get: error', error);
                });
        });
    }
}
