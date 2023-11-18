import React, { useEffect } from "react";
import useAxiosHooks from "../hooks/useAxiosHooks";
import { config } from "../config";
import { getTimeFromUnixTime } from "../utills";

const CurrentCityWeather = ({ propsObj }) => {
  const { currentWeather } = propsObj || {};
  console.log({ currentWeather });
  return (
    <div
      className="border rounded-md h-[200px] p-3 mt-5 text-white"
      style={{
        backgroundImage: "linear-gradient(to right, #8360c3, #2ebf91)",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="text-3xl font-semibold">
          <p>
          <img src={`http://openweathermap.org/img/w/${currentWeather?.weather?.[0]?.icon}.png`} alt="openweathermap" />

          </p>
          <p>
            {Math.round(currentWeather?.main?.temp)}
            <span>&#176; C</span>
          </p>
          {/* <p>
         
            humidity: {currentWeather?.main?.humidity} %
          </p>
          <p>wind speed: {Math.round(currentWeather?.wind?.speed || 1) * 3.6} km/h</p> */}
          <p> {currentWeather?.name}</p>
        </div>
        <div>
          <p> {getTimeFromUnixTime(currentWeather?.sys?.sunset)}</p>
          <p>Sunset Time, Friday</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentCityWeather;
