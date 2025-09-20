// Home.jsx
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useRef, useEffect } from "react";
import BasicCard from "../../Components/BasicCard/BasicCard";
import { getWeather } from "../../Services/WeatherApi/WeatherApi";
import { useWeather } from "../../Contexts/WeatherContext";

import Loader from "../../Components/Loader/Loader";

// import { Title, Meta, Link } from "react-head";

export default function Home() {
  const inputRef = useRef(null);
  // const [cityInput, setCityInput] = useState("Cairo");
  // const [weather, setWeather] = useState(null);

  const { cityInput, setCityInput, weather, setWeather } = useWeather();

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    handleFocus();
  }, []);

  useEffect(() => {
    if (!cityInput) return; // لو مفيش مدينة، مايبعتش Request

    getWeather(cityInput)
      .then((data) => {
        if (data) {
          setWeather(data);
        }
      })
      .catch((error) => {
        console.error("❌ Error fetching weather:", error);
        setWeather(null);
        // alert("City not found, please try again.");
      });
  }, [cityInput]);

  useEffect(() => {
    console.log(weather); // هيتطبع كل مرة weather يتغير
  }, [weather]);

  return (
    <>
      {/* SEO Tags */}
      {/* <Title>Home | Weather App</Title>
      <Meta name="description" content="Check the latest weather updates in your city." />
      <Link rel="canonical" href="http://localhost:5173/home" /> */}

      {/* Content Page */}
      <section
        className="parent-Cards w-full min-h-full p-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.729)",
        }}
      >
        <div className="bg-[url('/Images/banner.png')] bg-cover bg-center h-96 flex justify-center items-center">
          <Paper
            component="form"
            sx={{
              padding: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              backgroundColor: "oklch(80.9% 0.105 251.113)",
              color: "#ccc",
              boxShadow: 3,
              borderRadius: "50px",
            }}
          >
            <InputBase
              inputRef={inputRef}
              sx={{ ml: 1, p: 1, flex: 1 }}
              placeholder="Enter A City, please"
              inputProps={{ "aria-label": "Enter A City, please" }}
              onChange={(e) => {
                setCityInput(e.target.value);
              }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleFocus}
            >
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="location"
              title="Analysis Relative Your Location"
            >
              <DirectionsIcon />
            </IconButton>
          </Paper>
        </div>

        {/* Cards */}
        <section className=" min-h-2/3 w-full flex gap-6 flex-wrap justify-center ">
          <div className="flex flex-wrap justify-center gap-6  pb-20 -mt-15 ">
            {weather ? (
              weather.forecast.forecastday.map((day, index) => {
                const dateObj = new Date(day.date);
                const dayName = weekDays[dateObj.getDay()];

                return (
                  <BasicCard
                    key={index}
                    city={index === 0 ? weather.location.name : dayName}
                    date={index === 0 ? `${dayName}, ${day.date}` : day.date}
                    temp={
                      index === 0 ? weather.current.temp_c : day.day.avgtemp_c
                    }
                    condition={day.day.condition.text}
                    icon={day.day.condition.icon}
                    wind={day.day.maxwind_kph}
                  />
                );
              })
            ) : (
              <Loader />
            )}
          </div>
        </section>
      </section>
    </>
  );
}
