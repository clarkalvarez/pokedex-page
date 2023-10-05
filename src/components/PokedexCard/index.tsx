import styles from "./style.module.css";
import { PokemonInterface } from "../../types";
import { padWithZeros } from "../../helpers/padWithZero";

function PokedexCard({ pokemonDetail }: { pokemonDetail: PokemonInterface }) {
  return (
    <>
      <div className={styles.pokedexCard}>
        <img
          src={`pokemonImages/images/${padWithZeros(pokemonDetail.id, 3)}.png`}
          alt={`Pokemon ${pokemonDetail.name.english}`}
        />
        <label>
          <b>{pokemonDetail.name.english}</b>
        </label>

        <div className={styles.pokedexTypes}>
          <ul>
            {pokemonDetail.type.map((typeName: string) => (
              <li key={typeName}>{typeName}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default PokedexCard;
