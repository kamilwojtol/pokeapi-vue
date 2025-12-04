<script lang="ts" setup>
import { Card } from "primevue";
import PillFilter from "../Filters/PillFilter.vue";
import { computed, type PropType } from "vue";
import type { Pokemon } from "../../interfaces/IPokemonService";

const props = defineProps({
  text: String,
  color: String,
  pokemon: Object as PropType<Pokemon>,
});

const cardColor = computed(() => {
  if (props.color) {
    return props.color;
  }

  return "#414141";
});
</script>

<template>
  <Card
    class="rounded-3xl mx-4 my-2 p-2 cursor-pointer"
    :style="{ background: props.color }"
    v-if="pokemon?.details"
  >
    <template #title>
      <div class="flex justify-center items-center">
        <img
          :src="pokemon?.details.sprites.front_default"
          alt="image of pokemon"
        />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-xl">{{ pokemon.name }}</h2>
        <span class="text-sm">{{ "#0" + pokemon.details.id }}</span>
        <div class="flex flex-row gap-2">
          <PillFilter :isCardPill="true" text="Fire" class="mt-2" />
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
