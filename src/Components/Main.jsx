import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

function Main() {
  const [data, setData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const savedCity = localStorage.getItem("city");
  const [city, setCity] = useState(savedCity || "London");
  const [prevCity, setPrevCity] = useState("");
  const [time, setTime] = useState("");
  const savedMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(savedMode === "true");

  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  function callApi() {
    if (city !== prevCity) {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=5ca149f94dc4c90f0b522fbf0f6c0164`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(`hello ${err}`);
        });
      setPrevCity(city);

      let options = {
        method: "GET",
        headers: { "x-api-key": "fwAm/oCNznM24sSGKftf+Q==Y1GT5Zj5kuZSkjyM" },
      };

      let url2 = "https://api.api-ninjas.com/v1/worldtime?city=" + city;

      fetch(url2, options)
        .then((res) => res.json())
        .then((data) => {
          setTime(data);
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    }
  }

  useEffect(() => {
    callApi();
    setDataLoaded(true);
  }, []);

  const backgroundColor = {
    background: darkMode ? "#1D2837" : "#0a6e70",
    transition: "background 0.6s ease-in",
  };

  return (
    <div style={backgroundColor} className="container">
      <TopSection
        data={data}
        city={city}
        setCity={setCity}
        callApi={callApi}
        dataLoaded={dataLoaded}
        setPrevCity={setPrevCity}
        time={time}
        prevCity={prevCity}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        backgroundColor={backgroundColor}
      />
      <BottomSection data={data} />
    </div>
  );
}

export default Main;
