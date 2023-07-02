import {ItemsApiClientUrlsInterface, ItemsApiClientModel} from "@/models/api-client/items";

const urls: ItemsApiClientUrlsInterface = {
    fetchItems: '/static/data/items.json'
}

const itemsApiClient = new ItemsApiClientModel(urls);

export default itemsApiClient;
