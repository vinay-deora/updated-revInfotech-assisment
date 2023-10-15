import { createSlice } from "@reduxjs/toolkit";

const BridgeSlice = createSlice({
  name: "Bridge",
  initialState: {
    AddBridgeData: null,
  },
  reducers: {
    AddData: (state, action) => {
      state.AddBridgeData = action.payload;
    },
  },
});
export const { AddData } = BridgeSlice.actions;
export default BridgeSlice.reducer;
