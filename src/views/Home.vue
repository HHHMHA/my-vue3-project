<template>
  <div class="home">
    <ItemsListComponent :items="items" :loading="loading" @selectItem="onSelectItem"></ItemsListComponent>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, onMounted} from 'vue';
import store from '@/store';
import ItemsListComponent from '@/components/items/ItemsList.component.vue';
import {ItemInterface} from "@/models/items/Item.interface";
import {useStore} from "vuex"; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComponent,
  },
  setup() {

    const items = computed(() => {
      return store.state.items;
    });

    const loading = computed(() => {
      return store.state.loading;
    });

    onMounted(() => {
      store.dispatch('loadItems');
    });

    const onSelectItem = (item: ItemInterface) => {
      store.dispatch("selectITem", {
        id: item.id,
        selected: !item.selected,
      })
    };

    return {
      items,
      loading,
      onSelectItem,
    };
  },
});
</script>
