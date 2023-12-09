import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function TopSection({ data, city, getCity, callApi, dataLoaded }) {
  const [weatherIcon, setWeatherIcon] = useState("");
  const [error, setError] = useState(false);
  const [dontCallApi, setDontCallApi] = useState(false);

  let CurrentWeatherIconId = "";

  console.log(dontCallApi);

  function handleClick(e) {
    if (city === city) {
      setDontCallApi(true);
      e.preventDefault();
    } else {
      setDontCallApi(false);
      callApi();
    }

    if (city === "") {
      setError(true);
    } else {
      setError(false);
      callApi();
    }
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
        setWeatherIcon("/src/assets/04d.png");
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

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        style={{ border: error && "1px solid red" }}
        value={city}
        type="text"
        onChange={(e) => getCity(e.target.value)}
      />
      <button onClick={handleClick}>
        <FaMagnifyingGlass />
      </button>
      <p>{error && "Cannot be blank"}</p>
      <h1>City</h1>
      <div>
        <h2>{data.name} </h2>
        <h3>{data.name && data.sys.country}</h3>
      </div>
      <div>
        <img src={weatherIcon} />
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
