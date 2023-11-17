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
    const options = { weekday: 'long' };
    const dayName = date.toLocaleDateString(undefined, options);
    return dayName;
  };

export const Fakedata = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1700254800,
      main: {
        temp: 21.59,
        feels_like: 21.97,
        temp_min: 20.79,
        temp_max: 21.59,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 83,
        temp_kf: 0.8,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 1,
        deg: 12,
        gust: 2.48,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-17 21:00:00",
    },
    {
      dt: 1700265600,
      main: {
        temp: 21.04,
        feels_like: 21.45,
        temp_min: 20.56,
        temp_max: 21.04,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 86,
        temp_kf: 0.48,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 2.13,
        deg: 67,
        gust: 4.69,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-18 00:00:00",
    },
    {
      dt: 1700276400,
      main: {
        temp: 23.38,
        feels_like: 23.73,
        temp_min: 23.38,
        temp_max: 23.38,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 42,
      },
      wind: {
        speed: 4.84,
        deg: 62,
        gust: 6.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-18 03:00:00",
    },
    {
      dt: 1700287200,
      main: {
        temp: 26.98,
        feels_like: 28.2,
        temp_min: 26.98,
        temp_max: 26.98,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 3.98,
        deg: 47,
        gust: 4.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-18 06:00:00",
    },
    {
      dt: 1700298000,
      main: {
        temp: 26.84,
        feels_like: 28.02,
        temp_min: 26.84,
        temp_max: 26.84,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 62,
      },
      wind: {
        speed: 3.52,
        deg: 29,
        gust: 3.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-18 09:00:00",
    },
    {
      dt: 1700308800,
      main: {
        temp: 25.13,
        feels_like: 25.47,
        temp_min: 25.13,
        temp_max: 25.13,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 58,
      },
      wind: {
        speed: 2.22,
        deg: 44,
        gust: 2.73,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-18 12:00:00",
    },
    {
      dt: 1700319600,
      main: {
        temp: 24.07,
        feels_like: 24.41,
        temp_min: 24.07,
        temp_max: 24.07,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1014,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 1.83,
        deg: 74,
        gust: 2.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-18 15:00:00",
    },
    {
      dt: 1700330400,
      main: {
        temp: 22.46,
        feels_like: 22.85,
        temp_min: 22.46,
        temp_max: 22.46,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1014,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.12,
        deg: 55,
        gust: 2.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-18 18:00:00",
    },
    {
      dt: 1700341200,
      main: {
        temp: 21.32,
        feels_like: 21.73,
        temp_min: 21.32,
        temp_max: 21.32,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 2.33,
        deg: 50,
        gust: 2.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-18 21:00:00",
    },
    {
      dt: 1700352000,
      main: {
        temp: 20.43,
        feels_like: 20.83,
        temp_min: 20.43,
        temp_max: 20.43,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 2.65,
        deg: 34,
        gust: 3.64,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-19 00:00:00",
    },
    {
      dt: 1700362800,
      main: {
        temp: 24.64,
        feels_like: 24.96,
        temp_min: 24.64,
        temp_max: 24.64,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1016,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.08,
        deg: 31,
        gust: 3.99,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-19 03:00:00",
    },
    {
      dt: 1700373600,
      main: {
        temp: 28.53,
        feels_like: 29.18,
        temp_min: 28.53,
        temp_max: 28.53,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.15,
        deg: 23,
        gust: 3.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-19 06:00:00",
    },
    {
      dt: 1700384400,
      main: {
        temp: 29.6,
        feels_like: 29.57,
        temp_min: 29.6,
        temp_max: 29.6,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 2.85,
        deg: 9,
        gust: 2.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-19 09:00:00",
    },
    {
      dt: 1700395200,
      main: {
        temp: 26.2,
        feels_like: 26.2,
        temp_min: 26.2,
        temp_max: 26.2,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.51,
        deg: 11,
        gust: 2.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-19 12:00:00",
    },
    {
      dt: 1700406000,
      main: {
        temp: 24.54,
        feels_like: 24.59,
        temp_min: 24.54,
        temp_max: 24.54,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.99,
        deg: 4,
        gust: 2.46,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-19 15:00:00",
    },
    {
      dt: 1700416800,
      main: {
        temp: 23.16,
        feels_like: 23.15,
        temp_min: 23.16,
        temp_max: 23.16,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1013,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.94,
        deg: 353,
        gust: 2.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-19 18:00:00",
    },
    {
      dt: 1700427600,
      main: {
        temp: 21.84,
        feels_like: 21.78,
        temp_min: 21.84,
        temp_max: 21.84,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1012,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.19,
        deg: 4,
        gust: 2.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-19 21:00:00",
    },
    {
      dt: 1700438400,
      main: {
        temp: 20.95,
        feels_like: 20.88,
        temp_min: 20.95,
        temp_max: 20.95,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 16,
      },
      wind: {
        speed: 1.37,
        deg: 39,
        gust: 1.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-20 00:00:00",
    },
    {
      dt: 1700449200,
      main: {
        temp: 25.29,
        feels_like: 25.28,
        temp_min: 25.29,
        temp_max: 25.29,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 1.52,
        deg: 10,
        gust: 1.47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-20 03:00:00",
    },
    {
      dt: 1700460000,
      main: {
        temp: 28.96,
        feels_like: 28.57,
        temp_min: 28.96,
        temp_max: 28.96,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1013,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 19,
      },
      wind: {
        speed: 1.48,
        deg: 323,
        gust: 1.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-20 06:00:00",
    },
    {
      dt: 1700470800,
      main: {
        temp: 29.81,
        feels_like: 28.97,
        temp_min: 29.81,
        temp_max: 29.81,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 71,
      },
      wind: {
        speed: 1.57,
        deg: 284,
        gust: 1.72,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-20 09:00:00",
    },
    {
      dt: 1700481600,
      main: {
        temp: 26.06,
        feels_like: 26.06,
        temp_min: 26.06,
        temp_max: 26.06,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 1.27,
        deg: 277,
        gust: 1.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-20 12:00:00",
    },
    {
      dt: 1700492400,
      main: {
        temp: 24.74,
        feels_like: 24.68,
        temp_min: 24.74,
        temp_max: 24.74,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 0.94,
        deg: 10,
        gust: 1.27,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-20 15:00:00",
    },
    {
      dt: 1700503200,
      main: {
        temp: 23.49,
        feels_like: 23.44,
        temp_min: 23.49,
        temp_max: 23.49,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 1.36,
        deg: 330,
        gust: 1.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-20 18:00:00",
    },
    {
      dt: 1700514000,
      main: {
        temp: 22.52,
        feels_like: 22.47,
        temp_min: 22.52,
        temp_max: 22.52,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 1.58,
        deg: 349,
        gust: 1.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-20 21:00:00",
    },
    {
      dt: 1700524800,
      main: {
        temp: 22.26,
        feels_like: 22.21,
        temp_min: 22.26,
        temp_max: 22.26,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 1.25,
        deg: 39,
        gust: 1.32,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-21 00:00:00",
    },
    {
      dt: 1700535600,
      main: {
        temp: 25.29,
        feels_like: 25.28,
        temp_min: 25.29,
        temp_max: 25.29,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1014,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.08,
        deg: 7,
        gust: 1.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-21 03:00:00",
    },
    {
      dt: 1700546400,
      main: {
        temp: 28.44,
        feels_like: 28.39,
        temp_min: 28.44,
        temp_max: 28.44,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.91,
        deg: 332,
        gust: 2.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-21 06:00:00",
    },
    {
      dt: 1700557200,
      main: {
        temp: 29.23,
        feels_like: 28.75,
        temp_min: 29.23,
        temp_max: 29.23,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.33,
        deg: 324,
        gust: 2.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-21 09:00:00",
    },
    {
      dt: 1700568000,
      main: {
        temp: 25.72,
        feels_like: 25.65,
        temp_min: 25.72,
        temp_max: 25.72,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 1.76,
        deg: 348,
        gust: 2.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-21 12:00:00",
    },
    {
      dt: 1700578800,
      main: {
        temp: 24.14,
        feels_like: 24.07,
        temp_min: 24.14,
        temp_max: 24.14,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.17,
        deg: 66,
        gust: 1.53,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-21 15:00:00",
    },
    {
      dt: 1700589600,
      main: {
        temp: 23.24,
        feels_like: 23.19,
        temp_min: 23.24,
        temp_max: 23.24,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 85,
      },
      wind: {
        speed: 1.05,
        deg: 51,
        gust: 1.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-21 18:00:00",
    },
    {
      dt: 1700600400,
      main: {
        temp: 22.3,
        feels_like: 22.18,
        temp_min: 22.3,
        temp_max: 22.3,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 1.99,
        deg: 26,
        gust: 2.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-21 21:00:00",
    },
    {
      dt: 1700611200,
      main: {
        temp: 21.15,
        feels_like: 21.04,
        temp_min: 21.15,
        temp_max: 21.15,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 1.7,
        deg: 49,
        gust: 2.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-22 00:00:00",
    },
    {
      dt: 1700622000,
      main: {
        temp: 25.25,
        feels_like: 25.27,
        temp_min: 25.25,
        temp_max: 25.25,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1013,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 1.5,
        deg: 42,
        gust: 1.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-22 03:00:00",
    },
    {
      dt: 1700632800,
      main: {
        temp: 29.14,
        feels_like: 28.49,
        temp_min: 29.14,
        temp_max: 29.14,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 3.03,
        deg: 350,
        gust: 3.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-22 06:00:00",
    },
    {
      dt: 1700643600,
      main: {
        temp: 29.58,
        feels_like: 28.58,
        temp_min: 29.58,
        temp_max: 29.58,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 4.09,
        deg: 351,
        gust: 4.51,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-11-22 09:00:00",
    },
    {
      dt: 1700654400,
      main: {
        temp: 25.79,
        feels_like: 25.55,
        temp_min: 25.79,
        temp_max: 25.79,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 12,
      },
      wind: {
        speed: 2.5,
        deg: 15,
        gust: 3.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-22 12:00:00",
    },
    {
      dt: 1700665200,
      main: {
        temp: 24.08,
        feels_like: 23.8,
        temp_min: 24.08,
        temp_max: 24.08,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.15,
        deg: 26,
        gust: 2.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-22 15:00:00",
    },
    {
      dt: 1700676000,
      main: {
        temp: 22.51,
        feels_like: 22.17,
        temp_min: 22.51,
        temp_max: 22.51,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.31,
        deg: 7,
        gust: 2.82,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-11-22 18:00:00",
    },
  ],
  city: {
    id: 1185241,
    name: "Dhaka",
    coord: {
      lat: 23.7104,
      lon: 90.4074,
    },
    country: "BD",
    population: 10356500,
    timezone: 21600,
    sunrise: 1700266478,
    sunset: 1700305947,
  },
};
