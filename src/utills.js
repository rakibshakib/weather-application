export const getFullDay = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  // Use the Date methods to get individual components of the date
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so add 1
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  // Format the date as a string
  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  const formattedTime = `${formattedHours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${ampm}`;
  const options = { weekday: "long" };
  const dayName = date.toLocaleDateString(undefined, options);
  return { formattedDate, dayName, formattedTime };
};
export const orderDayList = () => {
  const daysOfWeekList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current day
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayIndex = daysOfWeekList.indexOf(today);
  const reorderedDaysOfWeek = [
    ...daysOfWeekList.slice(todayIndex),
    ...daysOfWeekList.slice(0, todayIndex),
  ];
  return reorderedDaysOfWeek.slice(0, 5);
};
// console.log(formattedDate);
export const getTimeFromUnixTime = (time) => {
  const date = new Date(time * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedTime = `${formattedHours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${ampm}`;

  return formattedTime;
};
export const getDayNameFromDateText = (dtTxt) => {
  const date = new Date(dtTxt);
  const options = { weekday: "long" };
  const dayName = date.toLocaleDateString(undefined, options);
  return dayName;
};
export const convertTo12HourFormat = (time24) => {
  console.log(time24);
  var timeParts = time24.split(":");
  var hours = parseInt(timeParts[0], 10);
  var minutes = timeParts[1];
  var seconds = timeParts[2];

  // Determine AM or PM
  var meridiem = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (00:00:00) as 12 AM

  // Add leading zero to single-digit hours, minutes, and seconds
  hours = padZero(hours);
  minutes = padZero(minutes);
  seconds = padZero(seconds);

  // Create the 12-hour formatted time string
  var time12 = hours + ":" + minutes + ":" + seconds + " " + meridiem;

  return time12;
};

function padZero(num) {
  return (num < 10 ? "0" : "") + num;
}
