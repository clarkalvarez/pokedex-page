import { useParams } from "react-router-dom";
import PokedexInfo from "../../components/PokedexInfo";
import BackButton from "../../components/BackButton";
import { useFetchGetPokemon } from "../../helpers/hooks/useFetchGetPokemon";

function PokemonDetailPage() {
  const { id } = useParams();

  const pokemon = useFetchGetPokemon(id);

  if (pokemon === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BackButton url="/" />
      <PokedexInfo pokemonDetail={pokemon} />
    </>
  );
}

export default PokemonDetailPage;
