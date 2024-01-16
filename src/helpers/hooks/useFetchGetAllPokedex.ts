import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setPokedexAction } from "../../redux/reducers/globalSlice";

export function useFetchGetAllPokedex() {
  const url = "http://localhost:3100/api/pokemon/";

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setPokedexAction(data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);
}
