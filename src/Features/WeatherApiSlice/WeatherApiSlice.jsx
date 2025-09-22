import { createSlice } from "@reduxjs/toolkit";

import { fetchWeather } from "../../Services/ThunkWeatherApi/ThunkWeatherApi";

const initialState = {
  city: "Cairo",
  weather: null,
  loading: false,
  error: null,
};

export const WeatherApiSlice = createSlice({
  name: "Weather",
  initialState,

  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.weather = null; 
        state.error = action.payload || "City not found.";
      });
  },
});

export const { setCity } = WeatherApiSlice.actions;

export default WeatherApiSlice.reducer;
