export interface PokemonTypes {
  results: PokemonType[];
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  id: number;
}
