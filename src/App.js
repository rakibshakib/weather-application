import CurrentCityWeather from "./components/CurrentCityWeather";
import Header from "./components/Header";
import Axios from "axios";
import { useEffect, useState } from "react";
import useAxiosHooks from "./hooks/useAxiosHooks";
import Forecast from "./components/Forecast";
import WeatherConditions from "./components/WeatherConditions";
import Loading from "./components/Loading";

const APIUrl = `https://api.openweathermap.org`;
Axios.defaults.baseURL = APIUrl;

function App() {
  const [cityName, setCityName] = useState("");
  const [finalCity, setFinalCity] = useState("");
  const SearchWeather = (e) => {
    e.preventDefault();
    getWeatherFn(cityName);
  };
  const [currentWeather, getCurrentWeather, loadingCurrentWeather, , error] =
    useAxiosHooks({});
  const getWeatherFn = (city = "Dhaka") => {
    getCurrentWeather({
      method: "get",
      apiUrl: `/weather?q=${city}&units=metric`,
      cb: (res) => {
        setFinalCity(cityName);
      },
    });
  };
  useEffect(() => {
    getWeatherFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <div className="md:container md:mx-auto px-5 border py-5 rounded-xl bg-white">
        <Header
          propsObj={{
            cityName,
            setCityName,
            SearchWeather,
          }}
        />

        {loadingCurrentWeather ? (
          <Loading />
        ) : (
          <>
            <CurrentCityWeather propsObj={{ currentWeather, error }} />
            {error ? (
              <></>
            ) : (
              <>
                <div className="grid grid-cols-12 gap-4 mt-5">
                  <div className="lg:col-span-3 xl:col-span-3 sm:col-span-12 md:col-span-12 col-span-12">
                    <WeatherConditions currentWeather={currentWeather} />
                  </div>
                  <div className="lg:col-span-9 xl:col-span-9 sm:col-span-12 md:col-span-12 col-span-12">
                    <Forecast cityName={finalCity} />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
