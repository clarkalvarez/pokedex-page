import styles from "./style.module.css";
import { PokemonInterface } from "../../types";
import { padWithZeros } from "../../helpers/padWithZero";
import { deletePokemon } from "../../helpers/deletePokemon";
import { useNavigate } from "react-router-dom";

function PokedexInfo({ pokemonDetail }: { pokemonDetail: PokemonInterface }) {
  const navigate = useNavigate();
  const handleDeletePokemonButton = async () => {
    const result = await deletePokemon(pokemonDetail.id);
    if (result) {
      alert(`Pokemon ${pokemonDetail.name.english} was deleted`);
      navigate("/");
    } else {
      alert(`Deleted not successful. Try again.`);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className="container">
          <div className="row items-center">
            <div className="col">
              <button type="button" className="btn btn-primary">
                Edit
              </button>
            </div>
            <div className="col">
              <label className={styles.pokemonId}>
                Pokemon ID: {pokemonDetail.id}
              </label>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDeletePokemonButton}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <h2 className={styles.pokemonName}>{pokemonDetail.name.english}</h2>
        <img
          className={styles.pokemonImg}
          src={`http://localhost:3100/image/${padWithZeros(
            pokemonDetail.id,
            3
          )}.png`}
          alt={`Pokemon ${pokemonDetail.name.english}`}
        />

        <div className="container p-4">
          <h5 className="border-bottom pb-2">Types</h5>
          <div className="row mt-20px">
            {pokemonDetail.type.map((typeName: string) => (
              <div className="col">
                <span className="bg-black text-white p-2 rounded ">
                  {typeName}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="container p-4">
            <h5 className="border-bottom pb-2">Stats</h5>

            <div className="row">
              <div className="row">
                <div className="col">HP: {pokemonDetail.base.HP}</div>
                <div className="col"> Attack: {pokemonDetail.base.Attack}</div>
                <div className="col">
                  {" "}
                  Defense: {pokemonDetail.base.Defense}
                </div>
                <div className="w-100 mb-4"></div>
                <div className="col">
                  Sp. Attack:
                  {pokemonDetail.base["Sp. Attack"] ||
                    pokemonDetail.base.SpAttack ||
                    0}
                </div>
                <div className="col">
                  Sp. Defense:
                  {pokemonDetail.base["Sp. Defense"] ||
                    pokemonDetail.base.SpDefense ||
                    0}
                </div>
                <div className="col"> Speed: {pokemonDetail.base.Speed}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokedexInfo;
