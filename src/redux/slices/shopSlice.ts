import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Vegetable } from "../../Interfaces/Interfaces";

export interface ShopState {
  vegetabls: Array<Vegetable>;
}
const initialState: ShopState = {
  vegetabls: [],
};

export const getVegetableItems = createAsyncThunk("", async (url: string) => {
  const res = await fetch(url);
  return res.json();
});
const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVegetableItems.fulfilled, (state, action) => {
      state.vegetabls = action.payload;
    });
  },
});

export default shopSlice.reducer;
