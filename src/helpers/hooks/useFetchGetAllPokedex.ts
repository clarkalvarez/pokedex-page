import { useEffect, useState } from "react";
import { PokemonInterface } from "../../types";

export function useFetchGetAllPokedex() {
  const url = "http://localhost:3100/api/pokemon/";

  const [data, setData] = useState<PokemonInterface[]>([]);

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
