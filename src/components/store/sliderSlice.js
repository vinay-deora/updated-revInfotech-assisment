import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    isSliderOpen: true,
  },
  reducers: {
    AddSlider: (state) => {
      state.isSliderOpen = !state.isSliderOpen;
    },
  },
});
export const { AddSlider } = sliderSlice.actions;
export default sliderSlice.reducer;
