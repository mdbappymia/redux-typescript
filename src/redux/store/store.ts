import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import placeReducer from "../slices/placeSlice";
import shopSlice from "../slices/shopSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    place: placeReducer,
    shop: shopSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
