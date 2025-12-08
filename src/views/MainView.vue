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
  getPokemonsByFilter,
} from "../services/PokemonService";
import type { Pokemon } from "../interfaces/IPokemonService";
import { getAllPokemons } from "../services/PokemonService";
import { Button } from "primevue";

const filters = ref<Filter[]>([]);
const pokemons = ref<Pokemon[]>([]);
const currentPage = ref<number>(0);
const activeFilter = ref<string | null>(null);

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
  currentPage.value++;
  const data = await getAllPokemons(currentPage.value);
  pokemons.value = data.results;
  await getPokemonDetails();
}

async function getPokemonDetails(type: "normal" | "filter" = "normal") {
  if (type === "filter") {
    for (const pokemon of pokemons.value) {
      const pokemonDetail = await getPokemonByName(pokemon.pokemon.name);
      pokemon.pokemon.details = pokemonDetail;
    }
  } else {
    for (const pokemon of pokemons.value) {
      const pokemonDetail = await getPokemonByName(pokemon.name);
      pokemon.details = pokemonDetail;
    }
  }
}

async function getPokemonsByFilterPill(filter: string) {
  const data = await getPokemonsByFilter(filter);
  pokemons.value = data.pokemon;
  await getPokemonDetails("filter");
}

onMounted(async () => {
  await getFilters();
  await getPokemons();
});
</script>

<template>
  <div class="background flex flex-col items-center h-full">
    <PageTitle class="text-2xl bold my-4" />
    <PokemonSearch class="w-1/2" @search="getPokemonsByName" />
    <Filters :filters="filters" @setFilter="getPokemonsByFilterPill($event)" />
    <CardList :filters="filters" :pokemons="pokemons" />
    <Button
      class="bg-blue-600 font-medium text-white p-2 px-6 rounded-3xl cursor-pointer mt-4"
      severity="info"
      label="Load more"
      rounded
      @click="getPokemons()"
    />
  </div>
</template>

<style scoped>
.background {
  background-color: #121212;
}
</style>
