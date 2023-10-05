import styles from "./style.module.css";
import { PokemonInterface } from "../../types";
import PokedexCard from "../PokedexCard";

function PokedexList({ filteredData }: { filteredData: PokemonInterface[] }) {
  return (
    <div className={styles.pokedexListContainer}>
      {filteredData.map((pokemon: PokemonInterface) => (
        <PokedexCard pokemonDetail={pokemon}/>
      ))}
      {filteredData.length === 0 && (
        <>
          <h2>No Pokemon Found</h2>
        </>
      )}
    </div>
  );
}

export default PokedexList;
