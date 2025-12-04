<script lang="ts" setup>
import PageTitle from "../components/Header/PageTitle.vue";
import PokemonSearch from "../components/Search/PokemonSearch.vue";
import CardList from "../components/Cards/CardList.vue";
import Filters from "../components/Filters/Filters.vue";
import type { Filter } from "../interfaces/IFilterService";
import { onMounted, ref } from "vue";
import {
  getAllPokemonTypes,
  getPokemonByName,
} from "../services/PokemonService";
import type { Pokemon } from "../interfaces/IPokemonService";
import { getAllPokemons } from "../services/PokemonService";

const filters = ref<Filter[]>([]);
const pokemons = ref<Pokemon[]>([]);

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
  unknown: "#68A090",
  stellar: "#FFD700",
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

function getPokemonsByName(searchQuery: string) {
  if (searchQuery.length >= 3) {
    setTimeout(async () => {
      const data = await getPokemonByName(searchQuery);
      console.log(data);
      return data;
    }, 500);
  }
}

async function getPokemons() {
  const data = await getAllPokemons();
  pokemons.value = data.results;
}

async function getPokemonDetails() {
  for (const pokemon of pokemons.value) {
    const pokemonDetail = await getPokemonByName(pokemon.name);
    pokemon.details = pokemonDetail;
  }
}

onMounted(async () => {
  await getFilters();
  await getPokemons();
  getPokemonDetails();
});
</script>

<template>
  <div class="background flex flex-col items-center h-full">
    <PageTitle class="text-2xl bold my-4" />
    <PokemonSearch class="w-1/2" @search="getPokemonsByName" />
    <Filters :filters="filters" />
    <CardList :filters="filters" :pokemons="pokemons" />
  </div>
</template>

<style scoped>
.background {
  background-color: #121212;
}
</style>
