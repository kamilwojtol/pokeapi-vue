import type { Pokemon, PokemonTypes } from "../interfaces/IPokemonService";
import { getData } from "./FetchService";

export async function getAllPokemonTypes(): Promise<PokemonTypes> {
  const pokemonTypes = await getData("https://pokeapi.co/api/v2/type");
  return pokemonTypes;
}

export async function getPokemonByName(searchQuery: string): Promise<Pokemon> {
  const pokemon = await getData(
    "https://pokeapi.co/api/v2/pokemon/" + searchQuery
  );
  return pokemon;
}

export async function getAllPokemons(limit: number = 24, offset: number = 24) {
  const pokemons = await getData(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset${offset}`
  );
  return pokemons;
}
