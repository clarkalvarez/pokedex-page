import { useEffect, useState } from "react";
import { Languages } from "../../types";

export function useFetchGetAllPokemonTypes() {
  const url = "http://localhost:3100/api/pokemonType";

  const [data, setData] = useState<Languages[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  return data;
}
