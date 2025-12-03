<script lang="ts" setup>
import { Card } from "primevue";
import PillFilter from "../Filters/PillFilter.vue";

const props = defineProps({
  text: String,
});
</script>

<template>
  <Card class="dark:bg-red-200 rounded-2xl mx-4 my-2 p-2 cursor-pointer">
    <template #title>
      <div class="flex justify-center items-center">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="image of pokemon"
        />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-xl">Pokemon</h2>
        <span class="text-sm">#001</span>
        <div class="flex flex-row gap-2">
          <PillFilter :isCardPill="true" text="Fire" class="mt-2" />
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
