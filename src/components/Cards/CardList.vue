<script lang="ts" setup>
import PokemonCard from "./PokemonCard.vue";
import { Button } from "primevue";
</script>

<template>
  <section
    class="flex flex-col w-full justify-center md:grid lg:grid-cols-3 md:grid-cols-2 mt-6"
  >
    <PokemonCard />
    <PokemonCard />
    <PokemonCard />
    <PokemonCard />
  </section>
  <Button class="bg-blue-400" severity="info" label="Load more" rounded />
</template>

<style scoped></style>
