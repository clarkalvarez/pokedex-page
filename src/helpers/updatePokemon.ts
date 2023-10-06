import { PokemonUpdateInterface } from "../types";

export async function updatePokemon(pokemon: PokemonUpdateInterface) {
  const url = `http://localhost:3100/api/pokemon/${pokemon.id}`;

  const fetchResult = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => {
      return error;
    });

  return fetchResult;
}
