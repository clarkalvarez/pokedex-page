export async function deletePokemon(id: number) {
  const url = `http://localhost:3100/api/pokemon/${id}`;
  const fetchResult = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
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
