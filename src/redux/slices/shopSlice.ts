import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Bike,
  EProducts,
  ProductCart,
  Vegetable,
} from "../../Interfaces/Interfaces";

export interface ShopState {
  vegetabls: Array<Vegetable>;
  bikes: Array<Bike>;
  electronics: Array<EProducts>;
  cart: Array<ProductCart>;
  totalCost: number;
}
const initialState: ShopState = {
  vegetabls: [],
  bikes: [],
  electronics: [],
  cart: JSON.parse(localStorage.getItem("eShopCart") || "[]") || [],
  totalCost: 0,
};

export const getVegetableItems = createAsyncThunk(
  "vegetable",
  async (url: string) => {
    const res = await fetch(url);
    return res.json();
  }
);
// get all bike function
export const getAllBike = createAsyncThunk("bike", async (url: string) => {
  const res = await fetch(url);
  return res.json();
});
// get all e-products
export const getAllEProduct = createAsyncThunk(
  "eProduct",
  async (url: string) => {
    const res = await fetch(url);
    return res.json();
  }
);
const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.find((item) => action.payload.id === item.id)) {
        return;
      }
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("eShopCart", JSON.stringify([...state.cart]));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("eShopCart", JSON.stringify([...state.cart]));
    },
    increaseItem: (state, action) => {
      const updateCart = [];
      for (let item of state.cart) {
        if (item.id === action.payload) {
          item.quantity += 1;
        }
        updateCart.push(item);
      }
      localStorage.setItem("eShopCart", JSON.stringify(updateCart));
      state.cart = updateCart;
    },
    decreaseItem: (state, action) => {
      const updateCart = [];
      for (let item of state.cart) {
        if (item.id === action.payload) {
          item.quantity -= 1;
        }
        updateCart.push(item);
      }
      localStorage.setItem("eShopCart", JSON.stringify(updateCart));
      state.cart = updateCart;
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("eShopCart");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVegetableItems.fulfilled, (state, action) => {
        state.vegetabls = action.payload;
      })
      .addCase(getAllBike.fulfilled, (state, action) => {
        state.bikes = action.payload;
      })
      .addCase(getAllEProduct.fulfilled, (state, action) => {
        state.electronics = action.payload;
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItem,
  decreaseItem,
  clearCart,
} = shopSlice.actions;

export default shopSlice.reducer;
