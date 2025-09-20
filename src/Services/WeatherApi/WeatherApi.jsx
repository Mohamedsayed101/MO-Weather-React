import axios from "axios";

export function getWeather(city) {
  const apiKey = "405c2d6cf90b46718ed125946252408";

  return axios
    .get("https://api.weatherapi.com/v1/forecast.json", {
      params: {
        key: apiKey,
        q: city,
        days: 3,
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error("❌ Error fetching weather data:", error);
      return null; 
    });
}
