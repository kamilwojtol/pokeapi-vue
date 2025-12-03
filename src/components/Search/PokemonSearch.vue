<script lang="ts" setup>
import { ref } from "vue";
import { InputText } from "primevue";

const pokemonSearchValue = ref("");

function getPokemonsByName(event: KeyboardEvent) {
  setTimeout(() => {}, 500);
}
</script>

<template>
  <InputText
    class="search-pokemon rounded-2xl border h-8 p-4 text-white"
    id="search-pokemon"
    type="text"
    placeholder="Search Pokémon..."
    v-model="pokemonSearchValue"
    @keyup="getPokemonsByName"
  />
</template>

<style scoped>
.search-pokemon {
  background-color: #1e1e1e;
  border-color: #1e1e1e;
}
</style>
