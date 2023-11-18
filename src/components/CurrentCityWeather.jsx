import React from "react";
import { getFullDay, getTimeFromUnixTime } from "../utills";

const CurrentCityWeather = ({ propsObj }) => {
  const { currentWeather } = propsObj || {};
  return (
    <div
      className="border rounded-md h-[200px] p-3 mt-5 text-white"
      style={{
        backgroundImage: "linear-gradient(to right, #8360c3, #2ebf91)",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex font-semibold mt-1">
          <p className="bg-white w-[100px] rounded-lg">
            <img
              src={`http://openweathermap.org/img/w/${currentWeather?.weather?.[0]?.icon}.png`}
              alt="openweathermap"
              className="w-full"
            />
          </p>
          <div className="ml-4">
            <p className="text-5xl">
              <span>{Math.round(currentWeather?.main?.temp)}</span>
              <span>&#176; C</span>
            </p>
            <p className="text-xl mt-3">
              {currentWeather?.name}, {currentWeather?.sys?.country}
            </p>
          </div>
        </div>
        <div className="text-end">
          <p className="text-xl">
            {getTimeFromUnixTime(currentWeather?.sys?.sunset)}
          </p>
          <p>Sunset Time, {getFullDay(currentWeather?.sys?.sunset)?.dayName}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentCityWeather;
