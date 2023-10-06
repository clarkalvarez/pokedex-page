import { useEffect, useState } from "react";
import { PokemonInterface } from "../../types";
import { useNavigate } from "react-router-dom";

export function useFetchGetPokemon(id: string | undefined) {
  const [data, setData] = useState<PokemonInterface | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemon = `http://localhost:3100/api/pokemon/${id}`;

    fetch(getPokemon)
      .then(async (response) => {
        if (response.status === 404) {
          console.log("Pokemon not found");
          navigate("/");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return data;
}
