<script lang="ts" setup>
import { Card } from "primevue";
import PillFilter from "../Filters/PillFilter.vue";
import { type PropType } from "vue";
import type { CardTypeInfo, Pokemon } from "../../interfaces/IPokemonService";

const props = defineProps({
  text: String,
  color: Object as PropType<CardTypeInfo>,
  pokemon: Object as PropType<Pokemon>,
});

function getCardColor() {
  if (props.color) {
    if (props.color?.colors.length === 1)
      return `linear-gradient(to right, ${props.color.colors[0]}, ${props.color.colors[0]})`;
    else {
      return `linear-gradient(to right, ${props.color.colors[0]}, ${props.color.colors[1]})`;
    }
  }
}
</script>

<template>
  <Card
    class="rounded-3xl mx-4 my-2 p-2 cursor-pointer"
    :style="{ background: getCardColor() }"
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
          <PillFilter
            v-for="(pill, index) in props.color?.names"
            :isCardPill="true"
            :text="pill"
            :color="props.color?.colors[index]"
            class="mt-2"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
