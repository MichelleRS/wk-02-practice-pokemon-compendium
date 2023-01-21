// imports
import { usePokemon } from '../../hooks/usePokemon.js';
import Select from '../Controls/Select/Select.js';
import PokeCard from '../Pokemon/PokeCard.js';

export default function Main() {
  // initialize a variable to store Pokemon data
  const { pokemon, types, handleSelectChange } = usePokemon();

  return (
    <main>
      {/* controls: select and query */}
      <Select types={types} handleSelectTypeChange={handleSelectChange} />

      {/* display pokemon cards */}
      <section>
        {/* use .map to return each pokemon card */}
        {pokemon.map((poke) => (
          <PokeCard key={poke._id} poke={poke} />
        ))}
      </section>
    </main>
  );
}
