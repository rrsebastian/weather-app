import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

function Main() {
  const [data, setData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [city, setCity] = useState("London");

  function callApi() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=5ca149f94dc4c90f0b522fbf0f6c0164`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }

  useEffect(() => {
    callApi();
    setDataLoaded(true);
  }, []);

  function getCity(value) {
    setCity(value);
  }

  return (
    <div>
      <TopSection
        data={data}
        city={city}
        getCity={getCity}
        callApi={callApi}
        dataLoaded={dataLoaded}
      />
      <BottomSection data={data} />
    </div>
  );
}

export default Main;
