// fetch first 20 pokemon
export async function fetchInitialPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
  const data = await resp.json();
  return data.results;
}

// fetch pokemon types
export async function fetchPokemonTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}

// fetch pokemon by type
export async function fetchPokemonByType(type) {
  const resp = await fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?type=${type}`);
  const data = await resp.json();
  return data.results;
}
