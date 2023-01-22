import './PokeCard.css';

export default function PokeCard({ poke: { _id, url_image, pokemon, type_1, type_2, shape } }) {
  return (
    <article className="card" key={_id}>
      <img src={url_image} />
      <h2>
        {pokemon
          .split(' ')
          .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
          .join(' ')}
      </h2>
      <ul>
        <li>
          Type: {type_1}, {type_2}
        </li>
        <li>Shape: {shape}</li>
      </ul>
    </article>
  );
}
