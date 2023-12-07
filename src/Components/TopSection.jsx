import React, { useEffect, useState } from "react";
import IMAGES from "../images";

console.log(IMAGES[0].image);

function TopSection({ data, city, getCity, callApi, dataLoaded }) {
  const [currentWeatherIconId, setCurrentWeatherIconId] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    if (dataLoaded === true) {
      setCurrentWeatherIconId(data.weather[0].icon);
    }

    if (currentWeatherIconId === "04d") {
      setWeatherIcon("/src/assets/03d.png");
    }
  }, []);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={city}
          type="text"
          onChange={(e) => getCity(e.target.value)}
        />
        <button onClick={callApi}>Add</button>
        <h1>City</h1>
        <div>
          <h2>{data.name} </h2>
          <h3>{data.name && data.sys.country}</h3>
        </div>
      </form>
      <img src={IMAGES[0].image} />
    </div>
  );
}

export default TopSection;
