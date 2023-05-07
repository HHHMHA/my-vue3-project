import {ItemInterface} from "@/models/items/Item.interface";

export interface ItemsStateInterface {
    loading: boolean,
    items: ItemInterface[],
}
