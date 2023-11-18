import React from "react";

const Header = ({ propsObj }) => {
  const { cityName, setCityName, SearchWeather } = propsObj;
  return (
    <div className="flex justify-center md:justify-between md:flex-row lg:flex-row flex-col items-center">
      <p className="text-2xl font-extrabold text-purple-600">Weather'R</p>
      <form
        onSubmit={SearchWeather}
        className="flex justify-between items-center border rounded-md"
      >
        <p className="w-[300px]">
          <input
            className=" py-2 px-3 -md w-full outline-none text-purple-600"
            type="text"
            placeholder="Enter City Name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </p>
        <button
          type="submit"
          className="border-l bg-purple-500 text-white font-semibold ml-2 py-2 px-3"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
