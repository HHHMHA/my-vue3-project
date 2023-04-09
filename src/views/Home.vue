<template>
  <div class="home">
    <ItemsListComponent :items="items"></ItemsListComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemsListComponent from '@/components/items/ItemsList.component.vue';
import {ItemInterface} from "@/models/items/Item.interface"; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComponent,
  },
  setup() {
    const items: ItemInterface[] = [{
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
    }];

    return {
      items,
    };
  },
});
</script>
