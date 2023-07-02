import { createStore } from 'vuex'
import {ItemsStateInterface} from "@/models/store/ItemsState.interface";
import {ItemInterface} from "@/models/items/Item.interface";
import apiClient from "@/api-client";

const state: ItemsStateInterface = {
  loading: false,
  items: [],
}

export default createStore({
  state,
  mutations: {
    loadingItems(state: ItemsStateInterface) {
      state.loading = true;
      state.items = [];
    },
    loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
      state.loading = false;
      state.items = items;
    },
    selectItem(state: ItemsStateInterface, params: {id: number, selected: boolean}) {
      const { id, selected } = params;
      const item = state.items.find(o => o.id === id);
      if (item) {
        item.selected = selected;
      }
    }
  },
  actions: {
    loadItems({commit, state}) {
      commit('loadedItems');

      apiClient.items.fetchItems().then(data => {
        commit('loadingItems', data);
      });

    },
    selectItem({commit}, params: {id: number, selected: boolean}) {
      commit('selectItem', params);
    }
  },
  modules: {
  }
})
