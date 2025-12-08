<script lang="ts" setup>
import type { PropType } from "vue";
import PokemonCard from "./PokemonCard.vue";
import type { Filter } from "../../interfaces/IFilterService";
import type {
  CardTypeInfo,
  Pokemon,
  SinglePokemonType,
} from "../../interfaces/IPokemonService";

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

function getCardColors(pokemon: Pokemon): CardTypeInfo | undefined {
  if (!pokemon.details) return undefined;

  const typeNames = pokemon.details.types.map(
    (t: SinglePokemonType) => t.type.name
  );

  const colors = typeNames
    .map((type: string) => props.filters.find((f) => f.type === type)?.color)
    .filter(Boolean) as string[];

  if (colors.length === 0) return undefined;

  return {
    colors: colors,
    names: typeNames,
  };
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
</template>

<style scoped></style>
