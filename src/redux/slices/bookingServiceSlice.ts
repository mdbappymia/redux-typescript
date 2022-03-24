import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BookedService } from "../../Interfaces/Interfaces";

interface BookingState {
  bookedService: Array<BookedService>;
}

const initialState: BookingState = {
  bookedService: [],
};

export const getAllBookingService = createAsyncThunk(
  "service",
  async (url: string) => {
    const res = await fetch(url);
    return res.json();
  }
);

const bookingServiceSlice = createSlice({
  name: "booked_place",
  initialState,
  reducers: {
    cancleOrder: (state, action) => {
      const newBookingService = state.bookedService.filter(
        (item) => item._id !== action.payload
      );
      state.bookedService = newBookingService;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBookingService.fulfilled, (state, action) => {
      state.bookedService = action.payload;
    });
  },
});

export const { cancleOrder } = bookingServiceSlice.actions;
export default bookingServiceSlice.reducer;
