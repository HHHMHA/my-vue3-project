import {ItemInterface} from "@/models/items/Item.interface";

export interface ItemsApiClientInterface {
    fetchItems: () => Promise<ItemInterface[]>;
}
