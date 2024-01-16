import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PokemonInterface } from "../../types";

export interface CommonState {
  // status: "idle" | "loading" | "failed";
  // startDate: string;
  // zipCode: string;
  // email: string;
  // interestedProducts: string;
  // emailToggle: boolean;
  // numberOfParticipants: number;
  // activityMenu: Array<SnapSelectMenuOption>;
  // activityType: string;
  // organizationMenu: Array<SnapSelectMenuOption>;
  // organizationType: string;
  // formSubmitted: boolean;
  // estimateVisible: boolean;
  // state: { st: string; state: string };
  // forecastCampaignData: IForecastData[];
  // graphData: GraphDataType[],
  // raisePerParticipant: number,
  // january: FundraiserDataType[];
  // february: FundraiserDataType[];
  // march: FundraiserDataType[];
  // april: FundraiserDataType[];
  // may: FundraiserDataType[];
  // june: FundraiserDataType[];
  // july: FundraiserDataType[];
  // august: FundraiserDataType[];
  // september: FundraiserDataType[];
  // october: FundraiserDataType[];
  // november: FundraiserDataType[];
  // december: FundraiserDataType[];
  pokedex: PokemonInterface[];
}

const initialState: CommonState = {
  // status: "idle",
  // startDate: "",
  // zipCode: "",
  // email: "",
  // interestedProducts: "Raise",
  // emailToggle: false,
  // numberOfParticipants: 0,
  // activityMenu: [],
  // activityType: "",
  // organizationMenu: OrganizationMenuOptions as Array<SnapSelectMenuOption>,
  // organizationType: "",
  // formSubmitted: false,
  // estimateVisible: false,
  // state: { st: "", state: "" },
  // forecastCampaignData: [],
  // graphData: [],
  // raisePerParticipant: 0,
  // january: [],
  // february: [],
  // march: [],
  // april: [],
  // may: [],
  // june: [],
  // july: [],
  // august: [],
  // september: [],
  // october: [],
  // november: [],
  // december: [],
  pokedex: [],
};

// export const submitForm = createAsyncThunk(
//   "global/submitForm",
//   async (formData: any) => {
//     const xhr = new XMLHttpRequest();
//     const url =
//       "https://api.hsforms.com/submissions/v3/integration/submit/5469698/305d5d1a-a1a5-4815-9c82-42519ee0a7f3";
//     const final_data = JSON.stringify(formData);
//     xhr.open("POST", url);
//     // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         alert(xhr.responseText); // Returns a 200 response if the submission is successful.
//       } else if (xhr.readyState === 4 && xhr.status === 400) {
//         alert(xhr.responseText); // Returns a 400 error the submission is rejected.
//       } else if (xhr.readyState === 4 && xhr.status === 403) {
//         alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
//       } else if (xhr.readyState === 4 && xhr.status === 404) {
//         alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
//       }
//     };
//     // Sends the request
//     xhr.send(final_data);
//   }
// );

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

export const {
  setPokedexAction,
  // setMonthlyData
} = globalSlice.actions;

export const getPokedexSelector = (state: RootState) => state.global.pokedex;
export default globalSlice.reducer;
