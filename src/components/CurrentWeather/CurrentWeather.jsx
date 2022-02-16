import React from "react";
import "./CurrentWeather.scss";

const CurrentWeather = (props) => {
  const { condition, icon, temp, name, country, isDay } = props.weather;

  return (
    <div className="currentWeather">
      <h1>{name}, {country}</h1>  
      <div className="currentWeather__container">
        <img src={icon} alt="" />
        <h1>{temp}<sup>o</sup>C</h1>
      </div>
      <h3>{condition} - {isDay === 1 ? "Daytime" : "Nighttime"}</h3>
    </div>
  );
};

export default CurrentWeather;
