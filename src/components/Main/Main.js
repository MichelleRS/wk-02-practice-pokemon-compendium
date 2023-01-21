// imports
import { usePokemon } from '../../hooks/usePokemon.js';

export default function Main() {
  // initialize a variable to store Pokemon
  const { pokemon } = usePokemon();

  return (
    <main>
      {/* controls: select and query */}

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
