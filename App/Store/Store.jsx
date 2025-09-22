import { configureStore } from "@reduxjs/toolkit";
import WeatherSliceReducer from "../../src/Features/WeatherApiSlice/WeatherApiSlice";

export const Store = configureStore({
  reducer: {
    weatherReducer: WeatherSliceReducer,
  },
});
