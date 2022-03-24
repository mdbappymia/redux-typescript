import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  user: any;
  isLoading: boolean;
  authError: string;
}
const initialState: IState = {
  user: {},
  isLoading: true,
  authError: "",
};
const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAuthError: (state, action) => {
      state.authError = action.payload;
    },
  },
});
export const { setUser, setIsLoading, setAuthError } = authSlice.actions;

export default authSlice.reducer;
