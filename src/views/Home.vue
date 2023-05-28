<template>
  <div class="home">
    <ItemsListComponent :items="items"></ItemsListComponent>
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
    })

    onMounted(() => {
      store.dispatch('loadItems');
    })

    return {
      items,
    };
  },
});
</script>
