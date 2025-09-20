// WeatherContext.jsx
import { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [cityInput, setCityInput] = useState("Cairo");
  const [weather, setWeather] = useState(null);

  return (
    <WeatherContext.Provider value={{ cityInput, setCityInput, weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
