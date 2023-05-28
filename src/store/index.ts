import { createStore } from 'vuex'
import {ItemsStateInterface} from "@/models/store/ItemsState.interface";
import {ItemInterface} from "@/models/items/Item.interface";

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

      const mockItems: ItemInterface[] = [{
        id: 1,
        name: 'Item 1',
        selected: false,
      }, {
        id: 2,
        name: 'Item 2',
        selected: false,
      }, {
        id: 3,
        name: 'Item 3',
        selected: false,
      },];

      setTimeout(() => {
        commit('loadingItems', mockItems);
      }, 1000);
    },
    selectItem({commit}, params: {id: number, selected: boolean}) {
      commit('selectItem', params);
    }
  },
  modules: {
  }
})
