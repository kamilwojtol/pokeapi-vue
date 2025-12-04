<script lang="ts" setup>
import { type PropType } from "vue";
import PillFilter from "./PillFilter.vue";
import type { Filter } from "../../interfaces/IFilterService";

const props = defineProps({
  filters: {
    type: Array as PropType<Filter[]>,
    required: true,
  },
});
</script>

<template>
  <section class="flex flex-row justify-center mt-8 w-screen">
    <PillFilter
      :color="filter.color"
      v-for="filter in filters"
      :text="filter.type"
    />
  </section>
</template>

<style scoped></style>
