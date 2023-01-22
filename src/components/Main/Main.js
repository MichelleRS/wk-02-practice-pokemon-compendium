// imports
import { usePokemon } from '../../hooks/usePokemon.js';
import Select from '../Controls/Select/Select.js';
import PokeCard from '../Pokemon/PokeCard.js';
import Loading from '../Controls/Select/Loading.js';
import './Main.css';

export default function Main() {
  // initialize a variable to store Pokemon data
  const { pokemon, types, handleSelectChange, loading } = usePokemon();

  return (
    <main>
      <section className="controls">
        <h1>Pokemon Compendium</h1>
        {/* controls: select and query */}
        <Select types={types} handleSelectTypeChange={handleSelectChange} />
        {/* loading display */}
        <Loading loading={loading} />
      </section>

      {/* display pokemon cards */}
      <section className="pokemon-cards-container">
        {/* use .map to return each pokemon card */}
        {pokemon.map((poke) => (
          <PokeCard key={poke._id} poke={poke} />
        ))}
      </section>
    </main>
  );
}
