import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BangladeshPlace, WorldPlace } from "../../Interfaces/Interfaces";

interface PlaceState {
  placesW: Array<WorldPlace>;
  placesB: Array<BangladeshPlace>;
  status: string;
}
const initialState: PlaceState = {
  placesW: [],
  placesB: [],
  status: "",
};

export const getWorldTourPlace = createAsyncThunk(
  "placeW",
  async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);
export const getBDTourPlace = createAsyncThunk(
  "placeB",
  async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

export const placeSlice = createSlice({
  name: "place",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWorldTourPlace.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(getWorldTourPlace.fulfilled, (state, action) => {
        state.placesW = action.payload;
      })
      .addCase(getBDTourPlace.fulfilled, (state, action) => {
        state.status = "Success";
        state.placesB = action.payload;
      });
  },
});
export default placeSlice.reducer;
