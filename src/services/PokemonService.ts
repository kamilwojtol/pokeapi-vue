import type { PokemonTypes } from "../interfaces/IPokemonService";
import { getData } from "./FetchService";

export async function getAllPokemonTypes(): Promise<PokemonTypes> {
  const pokemonTypes = await getData("https://pokeapi.co/api/v2/type");
  return pokemonTypes;
}

export async function getPokemonByName(
  searchQuery: string
): Promise<PokemonTypes> {
  const pokemon = await getData(
    "https://pokeapi.co/api/v2/pokemon/" + searchQuery
  );
  return pokemon;
}
