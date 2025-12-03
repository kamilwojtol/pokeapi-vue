<script lang="ts" setup>
import PageTitle from "../components/Header/PageTitle.vue";
import PokemonSearch from "../components/Search/PokemonSearch.vue";
import CardList from "../components/Cards/CardList.vue";
import Filters from "../components/Filters/Filters.vue";
</script>

<template>
  <div class="background flex flex-col items-center h-screen">
    <PageTitle class="text-2xl bold my-4" />
    <PokemonSearch class="w-1/2" />
    <Filters />
    <CardList />
  </div>
</template>

<style scoped>
.background {
  background-color: #121212;
}
</style>
