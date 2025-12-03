<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getAllPokemonTypes } from "../../services/PokemonService";
import PillFilter from "./PillFilter.vue";
import type { Filter } from "../../interfaces/IFilterService";

const filters = ref<Filter[]>([]);

const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

async function getFilters() {
  const data = await getAllPokemonTypes();
  data.results.forEach((filter) => {
    filters.value.push({
      type: filter.name,
      color: typeColors[filter.name as keyof typeof typeColors],
    });
  });
}

onMounted(async () => {
  await getFilters();
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
