<template>
  <div class="home">
    <ItemsListComponent :items="items"></ItemsListComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemsListComponent from '@/components/items/ItemsList.component.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComponent,
  },
  setup() {
    const items: any[] = [{
      id: 1,
      name: 'Item 1',
    }, {
      id: 2,
      name: 'Item 2',
    }, {
      id: 3,
      name: 'Item 3',
    }];

    return {
      items,
    };
  },
});
</script>
