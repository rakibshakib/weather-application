import { getDayNameFromDateText } from "../utills";

export const get5DaysForecastData = (
  getForecastData,
  setDayWiseReport,
  city = "dhaka"
) => {
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
      setDayWiseReport(dayWiseData);
    },
  });
};
export const handleLineChartData = (dayWiseData, setCurrentDayData) => {
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
      //   borderColor: "red",
      //   backgroundColor: "red",
      //   fill: true,
      //   tension: 0.1,
      // },
    ],
  };
  setCurrentDayData(data);
};
