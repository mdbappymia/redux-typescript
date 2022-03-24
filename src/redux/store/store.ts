import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import authSlice from "../slices/authSlice";
import bookingServiceSlice from "../slices/bookingServiceSlice";
import placeReducer from "../slices/placeSlice";
import shopSlice from "../slices/shopSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["users/setUser"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["users.user"],
      },
    }),
  reducer: {
    counter: counterReducer,
    place: placeReducer,
    shop: shopSlice,
    users: authSlice,
    booking: bookingServiceSlice,
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
