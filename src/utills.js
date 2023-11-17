const unixTimestamp = 1700298000;

// Create a new Date object with the Unix timestamp in milliseconds
const date = new Date(unixTimestamp * 1000);

// Use the Date methods to get individual components of the date
const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are zero-based, so add 1
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

// Format the date as a string
const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
  day < 10 ? "0" + day : day
} ${hours}:${minutes}:${seconds}`;

// console.log(formattedDate);
export const getTimeFromUnixTime = (time) => {
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedTime = `${formattedHours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${ampm}`;

  return formattedTime;
};
