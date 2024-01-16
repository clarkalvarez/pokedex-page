import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PokemonInterface } from "../../types";

export interface CommonState {
  pokedex: PokemonInterface[];
}

const initialState: CommonState = {
  pokedex: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setPokedexAction(state, action: PayloadAction<PokemonInterface[]>) {
      state.pokedex = action.payload;
      console.log("setPokedexAction");

      console.log(state.pokedex);
    },
    resetInitialStateAction: () => initialState,
  },
});

export const { setPokedexAction } = globalSlice.actions;

export const getPokedexSelector = (state: RootState) => state.global.pokedex;
export default globalSlice.reducer;
