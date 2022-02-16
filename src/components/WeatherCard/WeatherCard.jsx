import React from "react";
import "./WeatherCard.scss";

const WeatherCard = (props) => {
  const { date, condition, icon, temp } = props;

  return (
    <div className="weather-card">
      <p>{date}</p>
      <p>{condition}</p>
      <img src={icon} alt="" />
      <p>{temp}<sup>o</sup>c</p>
    </div>
  );
};

export default WeatherCard;
