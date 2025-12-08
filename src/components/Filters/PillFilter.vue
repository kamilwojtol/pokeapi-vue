<script lang="ts" setup>
const props = defineProps({
  text: String,
  color: String,
  isChecked: Boolean,
  isCardPill: Boolean,
});

const emit = defineEmits<{
  (e: "setFilter", filterName: string): void;
}>();
</script>

<template>
  <div
    class="rounded-3xl py-1 px-4 h-8 cursor-pointer text-center mr-2 text-white bg-red-400 border-transparent outline-1"
    :style="{ backgroundColor: props.color }"
    @click="emit('setFilter', props.text!)"
  >
    <span>{{ props.text }}</span>
  </div>
</template>

<style scoped></style>
