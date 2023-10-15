import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./sliderSlice";
import BridgeReducer from "./BridgeSlice";
const appStore = configureStore({
  reducer: {
    slider: sliderReducer,
    Bridge: BridgeReducer,
  },
});
export default appStore;
