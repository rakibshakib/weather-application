import React from "react";
import { getFullDay, getTimeFromUnixTime } from "../utills";

const CurrentCityWeather = ({ propsObj }) => {
  const { currentWeather, error } = propsObj || {};
  // console.log("CurrentCityWeather component rendering.. ");
  return (
    <div
      className="border rounded-md h-[200px] p-3 mt-5 text-white"
      style={{
        backgroundImage: "linear-gradient(to right, #8360c3, #2ebf91)",
      }}
    >
      {error ? (
        <div className="text-xl text-yellow-100 font-bold">
          <p>City not found...😥!! </p>
          <p>Please try again with correct city Name</p>
          <p className="text-[10px]">Message: {error}</p>
        </div>
      ) : (
        <div className="flex justify-between items-center xl:flex-row lg:flex-row md:flex-col flex-col">
          <div className="flex font-semibold mt-1">
            <p className="bg-white xl:w-[100px] lg:w-[100px] w-[50px]  rounded-lg">
              <img
                src={`http://openweathermap.org/img/w/${currentWeather?.weather?.[0]?.icon}.png`}
                alt="openweathermap"
                className="w-full"
              />
            </p>
            <div className="ml-4">
              <p className="xl:text-5xl lg:text-4xl text-xl">
                <span>{Math.round(currentWeather?.main?.temp)}</span>
                <span>&#176; C</span>
              </p>
              <p className="lg:text-xl md:text-xl text-base mt-3">
                {currentWeather?.name}, {currentWeather?.sys?.country}
              </p>
            </div>
          </div>
          <div className="lg:text-end xl:text-end text-center ">
            <p className="text-xl py-2">
              {getTimeFromUnixTime(currentWeather?.sys?.sunset)}
            </p>
            <p className="text-[12px] pb-2">Sunset Time</p>
            <p>Today: {getFullDay(currentWeather?.sys?.sunset)?.dayName}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// export default CurrentCityWeather;
export default React.memo(CurrentCityWeather);
