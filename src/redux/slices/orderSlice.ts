import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Orders } from "../../Interfaces/Interfaces";

interface OrdersState {
  orders: Array<Orders>;
}
const initialState: OrdersState = {
  orders: [],
};

export const getAllOrders = createAsyncThunk("", async (url: string) => {
  const res = await fetch(url);
  return res.json();
});

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    removeOrder: (state, action) => {
      const remaining = state.orders.filter(
        (item) => item._id !== action.payload
      );
      state.orders = remaining;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});
export const { removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
