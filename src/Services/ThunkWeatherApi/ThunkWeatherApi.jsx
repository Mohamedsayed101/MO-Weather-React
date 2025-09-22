import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "405c2d6cf90b46718ed125946252408";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.weatherapi.com/v1/forecast.json", {
        params: {
          key: apiKey,
          q: city,
          days: 3,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error?.message || "Error fetching weather");
    }
  }
);
