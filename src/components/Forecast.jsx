import React, { useEffect } from "react";
import useAxiosHooks from "../hooks/useAxiosHooks";
import { Fakedata, getDayNameFromDateText, getFullDay } from "../utills";

const Forecast = () => {
  //   const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.4125&exclude=current,minutely,hourly&units=metric&appid=${apiKey}`;
  const data = Fakedata;
  const [resForecast, getForecastData] = useAxiosHooks({ ...Fakedata });
  const getWeatherFn = (city = "Dhaka") => {
    // getForecastData({
    //   method: "get",
    //   apiUrl: `/forecast?q=${city}&units=metric`,
    //   cb: (res) => {
    //     console.log(res);
    //     const result = [...res?.list] || [];
    //     result.forEach((singleRes, index) => {
    //       console.log("date", index+1, "---> ", getFullDay(singleRes.dt), singleRes);
    //     });
    //     console.log(result.length)
    //   },
    // });

    const result = [...resForecast?.list] || [];

    const modified = result.map((singleRes, index) => {
      //   const { formattedDate, dayName, formattedTime } = getFullDay(
      //     singleRes.dt
      //   );

      return {
        ...singleRes,
        day_txt: getDayNameFromDateText(singleRes?.dt_txt),
      };
    });

    const dayWiseData = {};
    let currentDay = modified[0].day_txt;
    modified.forEach((item) => {
      // Check if the day_txt is the same as the current day
      if (item.day_txt === currentDay) {
        // If it is, add the item to the existing array for that day
        dayWiseData[currentDay] = dayWiseData[currentDay] || [];
        dayWiseData[currentDay].push(item);
      } else {
        // If it's a new day, update the current day and create a new array for it
        currentDay = item.day_txt;
        dayWiseData[currentDay] = [item];
      }
    });

    console.log({ dayWiseData });
    resForecast.list = modified;
  };
  useEffect(() => {
    getWeatherFn();
  }, []);
  //   console.log({ resForecast });

  return (
    <div className="border rounded px-3 py-2">
      <div className="chartSection"></div>
      <div className="dayList">
        <div>
          <div>MON</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
