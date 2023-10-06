import styles from "./style.module.css";
import { PokemonInterface } from "../../types";
import { padWithZeros } from "../../helpers/padWithZero";
import { useNavigate } from "react-router-dom";

function PokedexCard({ pokemonDetail }: { pokemonDetail: PokemonInterface }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${pokemonDetail.id}`);
  };

  return (
    <>
      <div className={styles.pokedexCard} onClick={handleCardClick}>
        <img
          className={styles.pokemonImage}
          src={`http://localhost:3100/image/${padWithZeros(
            pokemonDetail.id,
            3
          )}.png`}
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
