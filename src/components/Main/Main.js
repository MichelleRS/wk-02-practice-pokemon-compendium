// imports
import { usePokemon } from '../../hooks/usePokemon.js';

export default function Main() {
  // initialize a variable to store Pokemon
  const pokemon = usePokemon();

  return (
    <main>
      {/* controls: select and query */}

      {/* display of pokemon cards */}
      <section>
        {/* use .map to return a list of pokemon names */}
        {pokemon.map((poke) => (
          <p key={poke.id}>{poke.pokemon}</p>
        ))}
      </section>
    </main>
  );
}
