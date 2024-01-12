import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";

function TopSection({
  data,
  city,
  setCity,
  callApi,
  dataLoaded,
  setPrevCity,
  time,
  prevCity,
  darkMode,
  setDarkMode,
  backgroundColor,
}) {
  const [weatherIcon, setWeatherIcon] = useState("");
  let CurrentWeatherIconId = "";

  function handleClick() {
    if (city === "") {
      setCity(prevCity);
    }
  }

  function handleChange(e) {
    setPrevCity((prevCity) => prevCity);
    setCity(e.target.value);
  }

  useEffect(() => {
    if (
      dataLoaded === true &&
      data &&
      data.weather &&
      data.weather.length > 0
    ) {
      const newIconId = data.weather[0].icon;
      CurrentWeatherIconId = newIconId;

      if (newIconId === "01d" || newIconId === "01n") {
        setWeatherIcon("/src/assets/01d.png");
      } else if (newIconId === "02d" || newIconId === "02n") {
        setWeatherIcon("/src/assets/02d.png");
      } else if (newIconId === "03d" || newIconId === "03n") {
        setWeatherIcon("/src/assets/03d.png");
      } else if (newIconId === "04d" || newIconId === "04n") {
        setWeatherIcon("/src/assets/03d.png");
      } else if (newIconId === "09d" || newIconId === "09n") {
        setWeatherIcon("/src/assets/09d.png");
      } else if (newIconId === "09d" || newIconId === "09n") {
        setWeatherIcon("/src/assets/09d.png");
      } else if (newIconId === "10d" || newIconId === "10n") {
        setWeatherIcon("/src/assets/10d.png");
      } else if (newIconId === "11d" || newIconId === "11n") {
        setWeatherIcon("/src/assets/11d.png");
      } else if (newIconId === "13d" || newIconId === "13n") {
        setWeatherIcon("/src/assets/13d.png");
      } else if (newIconId === "50d" || newIconId === "50n") {
        setWeatherIcon("/src/assets/50d.png");
      }
    }
  }, [data]);

  const weatherDescription = data.weather && data.weather[0].description;

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  const inputBackground = backgroundColor;

  return (
    <form
      className="Form"
      onSubmit={(e) => {
        e.preventDefault();
        callApi();
      }}
    >
      <div className="input-button-wrapper">
        <input
          className="input"
          style={inputBackground}
          value={city}
          type="text"
          onChange={handleChange}
          placeholder="Enter a City"
        />
        <div className="buttons-wrapper">
          <button
            className="search-btn"
            style={inputBackground}
            onClick={handleClick}
          >
            <FaMagnifyingGlass className="search-img" />
          </button>
          <button
            onClick={handleDarkMode}
            style={inputBackground}
            className="darkMode-btn"
          >
            <MdDarkMode className="darkMode-img" />
          </button>
        </div>
      </div>
      <div className="location-wrapper">
        <h2>
          {data.name} <span>{data.name && data.sys.country}</span>{" "}
        </h2>
        <h3>
          {time &&
            `${time.hour}:${time.minute} ${time.hour >= 12 ? "PM" : "AM"}`}
        </h3>
      </div>
      <div className="weather-icon-wrapper">
        <img className="weather-icon" src={weatherIcon} />
        <h2>
          {data.weather &&
            weatherDescription.charAt(0).toUpperCase() +
              weatherDescription.slice(1)}
        </h2>
        <p>{data.main && Math.floor(data.main.temp)}°C</p>
      </div>
    </form>
  );
}

export default TopSection;
