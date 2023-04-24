<template>
  <div>
    <h3>Items:</h3>
    <ul>
      <ItemComponent v-for="item in items" :key="item.id" :model="item" @select="onItemSelect"/>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ItemInterface} from "@/models/items/Item.interface";
import ItemComponent from "@/components/items/children/Item.component.vue";

export default defineComponent({
  name: "ItemsList.component.vue",
  components: {ItemComponent},
  props: {
    items: {
      type: Array as PropType<ItemInterface[]>,
    },
  },
  setup() {
    const onItemSelect = (item: ItemInterface) => {
      item.selected = !item.selected;
    }

    return {
      onItemSelect
    };
  },
});
</script>

<style lang="scss">
  ul {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
</style>