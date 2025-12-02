<script setup lang="ts">
import PageTitle from "./components/PageTitle.vue";
import PillFilter from "./components/PillFilter.vue";
import PokemonSearch from "./components/PokemonSearch.vue";
</script>

<template>
  <div class="background flex flex-col items-center h-screen">
    <PageTitle class="text-2xl bold my-4" />
    <PokemonSearch class="w-1/2" />
    <section class="flex flex-row justify-center mt-8 w-screen">
      <PillFilter title="Fire" />
      <PillFilter title="Earth" />
      <PillFilter title="Wind" />
      <PillFilter title="Water" />
    </section>
  </div>
</template>

<style scoped>
.background {
  background-color: #121212;
}
</style>
