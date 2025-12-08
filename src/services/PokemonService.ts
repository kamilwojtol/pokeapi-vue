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

export async function getAllPokemons(page: number = 1) {
  const pokemons = await getData(
    `https://pokeapi.co/api/v2/pokemon/?limit=24&offset=${page * 24}`
  );
  return pokemons;
}

export async function getPokemonsByFilter(filter: string) {
  const pokemons = await getData(`https://pokeapi.co/api/v2/type/${filter}`);
  return pokemons;
}
