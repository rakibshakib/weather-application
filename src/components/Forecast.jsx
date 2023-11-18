import React, { useEffect, useState } from "react";
import useAxiosHooks from "../hooks/useAxiosHooks";
import { Fakedata, getDayNameFromDateText, orderDayList } from "../utills";

import LineChart from "./LineChart";

const Forecast = ({ cityName }) => {
  //   const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.4125&exclude=current,minutely,hourly&units=metric&appid=${apiKey}`;
  // const data = Fakedata;
  const [resForecast, getForecastData] = useAxiosHooks({});
  const [dayWiseReport, setDayWiseReport] = useState({});
  const weekDayList = orderDayList();
  const [currentDayData, setCurrentDayData] = useState();

  const getWeatherFn = (city = "dhaka") => {
    getForecastData({
      method: "get",
      apiUrl: `/forecast?q=${city}&units=metric`,
      cb: (res) => {
        const result = [...res?.list] || [];
        const modified = result.map((singleRes, index) => {
          return {
            ...singleRes,
            day_txt: getDayNameFromDateText(singleRes?.dt_txt),
          };
        });
        const dayWiseData = {};
        let currentDay = modified[0].day_txt;
        modified.forEach((item) => {
          if (item.day_txt === currentDay) {
            dayWiseData[currentDay] = dayWiseData[currentDay] || [];
            dayWiseData[currentDay].push(item);
          } else {
            currentDay = item.day_txt;
            dayWiseData[currentDay] = [item];
          }
        });
        console.log({ dayWiseData });
        setDayWiseReport(dayWiseData);
        resForecast.list = modified;
      },
    });
  };
  useEffect(() => {
    getWeatherFn(cityName ? cityName : "dhaka");
  }, [cityName]);

  const handleLineChartData = (dayWiseData) => {
    const label = [];
    const maxData = [];
    const minData = [];
    let dayName = "";
    dayWiseData.forEach((item) => {
      label.push(item?.dt_txt?.split(" ")?.[1]);
      maxData.push(item?.main?.temp_max);
      minData.push(item?.main?.temp_min);
      dayName = item.day_txt;
    });
    const data = {
      labels: label,
      day: dayName,
      datasets: [
        {
          label: "Maximum",
          data: maxData,
          borderColor: "orange",
          backgroundColor: "#f3e3c3",
          fill: true,
          tension: 0.1,
        },
        // {
        //   label: "Minimum",
        //   data: minData,
        //   borderColor: "gray",
        //   backgroundColor: "gray",
        //   fill: false,
        //   tension: 0.1,
        // },
      ],
    };
    setCurrentDayData(data);
  };
  useEffect(() => {
    if (dayWiseReport?.[weekDayList[0]]) {
      handleLineChartData(dayWiseReport?.[weekDayList[0]]);
    }
  }, [dayWiseReport]);

  console.log({ dayWiseReport });
  return (
    <div className="border rounded px-3 py-2 w-full">
      <div className="chartSection">
        <div className="rounded-md my-2">
          {/* <Line data={data} config={config} /> */}
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
                handleLineChartData(dayWiseReport[day]);
              }}
              key={day}
              className={`text-sm flex flex-col items-center cursor-pointer px-5 py-2 ${
                currentDayData?.day === dayWiseReport[day]?.[0].day_txt
                  ? "bg-purple-200"
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
              <p className="font-semibold">
                {" "}
                Max: {Math.round(dayWiseReport[day]?.[0]?.main?.temp_max)}
                <span>&#176; C</span>
              </p>
              <p className="font-semibold">
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
    </div>
  );
};

export default Forecast;
