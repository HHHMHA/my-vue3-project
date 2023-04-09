<template>
  <div>
    <h3>Items:</h3>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
  name: "ItemsList.component.vue",
  props: {
    items: {
      type: Array as PropType<any[]>,
    },
  },
});
</script>

<style scoped>

</style>