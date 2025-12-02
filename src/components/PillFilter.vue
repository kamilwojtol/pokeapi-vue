<script lang="ts" setup>
const props = defineProps({
  title: String,
  color: String,
  isChecked: Boolean,
});
</script>

<template>
  <div
    class="rounded-2xl py-1 px-4 h-8 cursor-pointer text-center mr-2 text-white bg-red-400 border-transparent"
  >
    <span>{{ title }}</span>
  </div>
</template>

<style scoped></style>
