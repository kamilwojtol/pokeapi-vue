<script lang="ts" setup>
import { ref } from "vue";
import { InputText } from "primevue";

const emit = defineEmits<{
  (e: "search", searchValue: string): void;
}>();

const pokemonSearchValue = ref("");

function searchPokemon() {
  emit("search", pokemonSearchValue.value);
}
</script>

<template>
  <InputText
    class="search-pokemon rounded-3xl border h-8 p-4 text-white"
    id="search-pokemon"
    type="text"
    placeholder="Search Pokémon..."
    v-model="pokemonSearchValue"
    @keyup="searchPokemon"
  />
</template>

<style scoped>
.search-pokemon {
  background-color: #1e1e1e;
  border-color: #1e1e1e;
}
</style>
