// imports

import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemonTypes } from '../services/getPokemon.js';

// create custom hook to return initial pokemon names, types
export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  // get supabase call for fetching initial pokemon
  useEffect(() => {
    const fetchData = async () => {
      // load pokemon
      const data = await fetchInitialPokemon();
      // set pokemon in state
      setPokemon(data);
    };
    fetchData();
  }, []);

  // get supabase call for fetching pokemon types
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  return { pokemon, types };
}
