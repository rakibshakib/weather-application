import CurrentCityWeather from "./components/CurrentCityWeather";
import Header from "./components/Header";
import Axios from "axios";
import { config } from "./config";
import { useEffect, useState } from "react";
import useAxiosHooks from "./hooks/useAxiosHooks";
import Forecast from "./components/Forecast";
import WeatherConditions from "./components/WeatherConditions";

const APIUrl = `https://api.openweathermap.org`;
Axios.defaults.baseURL = APIUrl;

function App() {
  const [cityName, setCityName] = useState("");
  const SearchWeather = (e) => {
    e.preventDefault();
    console.log({ cityName });
    getWeatherFn(cityName);
  };
  const [currentWeather, getCurrentWeather] = useAxiosHooks({});
  // http://openweathermap.org/img/w/04n.pngD
  const getWeatherFn = (city = "Dhaka") => {
    getCurrentWeather({
      method: "get",
      apiUrl: `/weather?q=${city}&units=metric&cnt=10`,
      cb: (res) => {
        console.log(res);
      },
    });
  };
  useEffect(() => {
    // getWeatherFn();
  }, []);
  return (
    <div className="App">
      <div className="md:container md:mx-auto px-5 border py-5 rounded-md">
        <Header
          propsObj={{
            cityName,
            setCityName,
            SearchWeather,
          }}
        />
        <CurrentCityWeather propsObj={{ currentWeather }} />
        <div className="grid grid-cols-2">
          <WeatherConditions />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
