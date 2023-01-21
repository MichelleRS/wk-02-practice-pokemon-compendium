// imports
import { usePokemon } from '../../hooks/usePokemon.js';
import Select from '../Controls/Select/Select.js';

export default function Main() {
  // initialize a variable to store Pokemon
  const { pokemon, types } = usePokemon();

  return (
    <main>
      {/* controls: select and query */}
      <Select types={types} />

      {/* display of pokemon cards */}
      <section>
        {/* use .map to return a list of pokemon names and type */}
        {pokemon.map((poke) => (
          <>
            <h2 key={poke.id}>{poke.pokemon}</h2>
            <p>
              Type: {poke.type_1}, {poke.type_2}
            </p>
          </>
        ))}
      </section>
    </main>
  );
}
