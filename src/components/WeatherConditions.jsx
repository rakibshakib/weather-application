import React from "react";
import humidityIcon from "../asset/images/humidity.png";
import sunset from "../asset/images/sunset.png";
import sunrise from "../asset/images/sunrise.png";
import wind from "../asset/images/wind.png";
import { getTimeFromUnixTime } from "../utills";
const WeatherConditions = ({ currentWeather }) => {
  return (
    <div className="h-full">
      <div className="px-8 border flex md:flex-col lg:flex-col xl:flex-col flex-row justify-around items-start py-3 h-full">
        <div className="flex items-center border-b-2 pb-3 w-full md:h-full h-[100px]">
          <figure className="w-[30px]">
            <img className="w-full" src={humidityIcon} alt="" />
          </figure>
          <div className="ml-3">
            <p className="text-sm">humidity</p>
            <p className="font-semibold">{currentWeather?.main?.humidity} %</p>
          </div>
        </div>
        <div className="flex items-center border-b-2 pb-3 w-full md:h-full h-[100px]">
          <figure className="w-[30px]">
            <img className="w-full" src={wind} alt="" />
          </figure>
          <div className="ml-3">
            <p className="text-sm">Wind</p>
            <p className="font-semibold">
              {Math.round(currentWeather?.wind?.speed || 1) * 3.6} km/h
            </p>
          </div>
        </div>
        <div className="flex items-center border-b-2 pb-3 w-full md:h-full h-[100px]">
          <figure className="w-[30px]">
            <img className="w-full" src={sunrise} alt="" />
          </figure>
          <div className="ml-3">
            <p className="text-sm">Sunrise</p>
            <p className="font-semibold">
              {getTimeFromUnixTime(currentWeather?.sys?.sunrise)}
            </p>
          </div>
        </div>
        <div className="flex items-center border-b-2 pb-3 w-full md:h-full h-[100px]">
          <figure className="w-[30px]">
            <img className="w-full" src={sunset} alt="" />
          </figure>
          <div className="ml-3">
            <p className="text-sm">Sunset</p>
            <p className="font-semibold">
              {getTimeFromUnixTime(currentWeather?.sys?.sunset)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherConditions;
