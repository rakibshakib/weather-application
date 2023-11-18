/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useAxiosHooks from "../hooks/useAxiosHooks";
import { orderDayList } from "../utills";

import LineChart from "./LineChart";
import { get5DaysForecastData, handleLineChartData } from "./helper";
import Loading from "./Loading";

const Forecast = ({ cityName }) => {
  const [, getForecastData, isLoadingForeCast] = useAxiosHooks({});
  const [dayWiseReport, setDayWiseReport] = useState({});
  const weekDayList = orderDayList();
  const [currentDayData, setCurrentDayData] = useState();

  useEffect(() => {
    get5DaysForecastData(
      getForecastData,
      setDayWiseReport,
      cityName ? cityName : "dhaka"
    );
  }, [cityName]);

  useEffect(() => {
    if (dayWiseReport?.[weekDayList[0]]) {
      handleLineChartData(dayWiseReport?.[weekDayList[0]], setCurrentDayData);
    }
  }, [dayWiseReport]);

  // console.log("Forecast component rendering.. ");
  return (
    <div className="border rounded px-3 py-2 w-full">
      {isLoadingForeCast ? (
        <Loading />
      ) : (
        <>
          <div className="chartSection">
            <div className="rounded-md my-2">
              {currentDayData?.labels?.length > 0 ? (
                <LineChart dayData={currentDayData} />
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
          <div className="dayList my-3">
            <div className="flex justify-between items-center">
              {weekDayList.map((day) => (
                <div
                  onClick={() => {
                    setCurrentDayData({});
                    handleLineChartData(dayWiseReport[day], setCurrentDayData);
                  }}
                  key={day}
                  className={`text-sm flex flex-col items-center cursor-pointer px-5 py-2 rounded-md hover:ring-1 ring-purple-300 ${
                    currentDayData?.day === dayWiseReport[day]?.[0].day_txt
                      ? "bg-purple-300 rounded-md"
                      : ""
                  }`}
                >
                  {dayWiseReport[day]?.[0]?.weather?.[0]?.icon && (
                    <img
                      src={`http://openweathermap.org/img/w/${dayWiseReport[day]?.[0]?.weather?.[0]?.icon}.png`}
                      alt="openweathermap"
                    />
                  )}

                  <h2>{day?.substring(0, 3)?.toUpperCase()}</h2>
                  <p className="font-semibold text-[12px]">
                    {" "}
                    Max: {Math.round(dayWiseReport[day]?.[0]?.main?.temp_max)}
                    <span>&#176; C</span>
                  </p>
                  <p className="font-semibold text-[12px]">
                    {" "}
                    Min:{" "}
                    {Math.round(
                      dayWiseReport[day]?.[dayWiseReport[day].length - 1]?.main
                        ?.temp_min
                    )}
                    <span>&#176; C</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// export default Forecast;
export default React.memo(Forecast);
