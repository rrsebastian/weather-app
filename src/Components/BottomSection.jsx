import React from "react";

function BottomSection({ data }) {
  return (
    <div className="bottom-container">
      {data.main && (
        <>
          <div className="maxTemp-feelsLike">
            <h3>Max temp:</h3>
            <p className="max-temp">{Math.floor(data.main.temp_max)}°C</p>
            <h3>Feels like:</h3>
            <p>{Math.floor(data.main.feels_like)}°C</p>
          </div>
          <div>
            <h3>Min temp:</h3>
            <p className="min-temp">{Math.floor(data.main.temp_min)}°C</p>
            <h3>Wind speed:</h3>
            <p>{Math.floor(data.wind.speed * 3.6)} km/h</p>
          </div>
        </>
      )}
    </div>
  );
}

export default BottomSection;
