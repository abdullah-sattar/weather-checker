import React from "react";
import { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./History.scss";

const History = (props) => {
  const { searchterm, weather } = props;
  const [forecastHistory, setForecastHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/add-forecast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(weather),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  }, [weather]);

  useEffect(() => {
    if (searchterm.length !== 0) {
      fetch(`http://localhost:8080/forecasts/${searchterm}`)
        .then((response) => response.json())
        .then((forecast) => {
          setForecastHistory(forecast);
        });
    }
  }, [searchterm, setForecastHistory]);

  const weatherCardJSX = forecastHistory.map((forecast) => {
    return (
      <WeatherCard
        date={forecast.date}
        condition={forecast.condition}
        icon={forecast.icon}
        temp={forecast.temp}
      />
    );
  });

  return <div className="card-container">
    <h2>Previous searches for {weather.name}</h2>
    {weatherCardJSX}
    </div>;
};

export default History;
