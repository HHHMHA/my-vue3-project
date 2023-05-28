<template>
  <div>
    <h3>Items - loading: {{ loading }}:</h3>
    <Loader v-show="loading" :show="loading"></Loader>
    <ul v-show="!loading">
      <ItemComponent v-for="item in items" :key="item.id" :model="item" @select="onItemSelect"/>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ItemInterface} from "@/models/items/Item.interface";
import Loader from "@/components/shared/Loader.component.vue";
import ItemComponent from "@/components/items/children/Item.component.vue";

export default defineComponent({
  name: "ItemsList.component.vue",
  emits: ['selectItem'],
  components: {
    ItemComponent,
    Loader,
  },
  props: {
    items: {
      type: Array as PropType<ItemInterface[]>,
    },
    loading: {
      type: Boolean,
    }
  },
  setup({  }, { emit }) {
    const onItemSelect = (item: ItemInterface) => {
      emit('selectItem', item);
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