<script lang="ts" setup>
import type { PropType } from "vue";
import PokemonCard from "./PokemonCard.vue";
import { Button } from "primevue";
import type { Filter } from "../../interfaces/IFilterService";
import type { Pokemon } from "../../interfaces/IPokemonService";

const props = defineProps({
  filters: {
    type: Array as PropType<Filter[]>,
    required: true,
  },
  pokemons: {
    type: Array as PropType<Pokemon[]>,
    require: true,
  },
});

function getCardColors(pokemon: Pokemon): string | undefined {
  if (!pokemon.details) return undefined;

  // Pobranie nazw typów (1 lub 2)
  const typeNames = pokemon.details.types.map((t) => t.type.name);

  // Znalezienie przypisanych kolorów
  const colors = typeNames
    .map((type) => props.filters.find((f) => f.type === type)?.color)
    .filter(Boolean) as string[];

  // Brak kolorów
  if (colors.length === 0) return undefined;

  // Jeden typ → zwykły kolor
  if (colors.length === 1)
    return `linear-gradient(to right, ${colors[0]}, ${colors[0]})`;

  // Dwa typy → gradient
  return `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;
}
</script>

<template>
  <section
    class="flex flex-col w-full justify-center md:grid lg:grid-cols-3 md:grid-cols-2 mt-6"
  >
    <PokemonCard
      v-for="pokemon in pokemons"
      :color="getCardColors(pokemon)"
      :pokemon="pokemon"
    />
  </section>
  <Button
    class="bg-blue-600 font-medium text-white p-2 px-6 rounded-3xl cursor-pointer mt-4"
    severity="info"
    label="Load more"
    rounded
  />
</template>

<style scoped></style>
