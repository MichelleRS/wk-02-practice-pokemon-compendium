// imports

import { useEffect, useState } from 'react';
import {
  fetchInitialPokemon,
  fetchPokemonTypes,
  fetchPokemonByType,
} from '../services/getPokemon.js';

// create custom hook to return initial pokemon names, types
export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  // get supabase call for fetching initial pokemon
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // load pokemon
      const data = await fetchInitialPokemon();
      // set pokemon in state
      setPokemon(data);
      setLoading(false);
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

  // handle change of type in select dropdown
  const handleSelectChange = async (type) => {
    setLoading(true);
    const data = await fetchPokemonByType(type);
    setPokemon(data);
    setLoading(false);
  };

  return { pokemon, types, handleSelectChange, loading };
}
