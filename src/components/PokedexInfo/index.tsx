import styles from "./style.module.css";
import { PokemonInterface } from "../../types";
import { padWithZeros } from "../../helpers/padWithZero";

function PokedexInfo({ pokemonDetail }: { pokemonDetail: PokemonInterface }) {
  return (
    <>
      <div className={styles.container}>
        <label className={styles.pokemonId}>
          Pokemon ID: {pokemonDetail.id}
        </label>
        <h2 className={styles.pokemonName}>{pokemonDetail.name.english}</h2>
        <img
          className={styles.pokemonImg}
          src={`/pokemonImages/images/${padWithZeros(pokemonDetail.id, 3)}.png`}
          alt={`Pokemon ${pokemonDetail.name.english}`}
        />

        <h3>Types</h3>

        <ul className={styles.listContainer}>
          {pokemonDetail.type.map((typeName: string) => (
            <li className={styles.listType} key={typeName}>
              {typeName}
            </li>
          ))}
        </ul>

        <h3>Stats</h3>
        <ul className={styles.listContainer}>
          <li className={styles.listStats}>HP: {pokemonDetail.base.HP}</li>
          <li className={styles.listStats}>
            Attack: {pokemonDetail.base.Attack}
          </li>
          <li className={styles.listStats}>
            Defense: {pokemonDetail.base.Defense}
          </li>
          <li className={styles.listStats}>
            Sp. Attack: {pokemonDetail.base["Sp. Attack"]}
          </li>
          <li className={styles.listStats}>
            Sp. Defense: {pokemonDetail.base["Sp. Defense"]}
          </li>
          <li className={styles.listStats}>
            Speed: {pokemonDetail.base.Speed}
          </li>
        </ul>
      </div>
    </>
  );
}

export default PokedexInfo;
