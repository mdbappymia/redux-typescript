import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  user: any;
}
const initialState: IState = {
  user: {},
};
const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});
export const { setUser } = authSlice.actions;

export default authSlice.reducer;
