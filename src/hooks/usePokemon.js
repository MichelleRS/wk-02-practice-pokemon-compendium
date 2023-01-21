// imports

import { useEffect, useState } from 'react';
import { fetchInitialPokemon } from '../services/getPokemon.js';

// create custom hook to return pokemon names
export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // load pokemon
      const data = await fetchInitialPokemon();
      // set pokemon in state
      setPokemon(data);
    };
    fetchData();
  }, []);
  return pokemon;
}
