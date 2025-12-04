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
  types: SinglePokemonType[];
  id: number;
  details: any;
}

export interface SinglePokemonType {
  type: {
    name: string;
  };
}
