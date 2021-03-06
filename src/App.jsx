import "./App.scss";
import React, { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Form from "./components/Form/Form";
import History from "./components/History/History";

const App = () => {
  const [term, setTerm] = useState("");
  const [searchterm, setSearchterm] = useState("");
  const [initialRender, setInitialRender] = useState(false);
  const [display, setDisplay] = useState(false);
  const [weather, setWeather] = useState({
    date: "",
    condition: "",
    icon: "",
    temp: "",
    name: "",
    country: "",
    isDay: "",
  });

  const getDate = () => {
    const date = new Date();
    return `${date.toDateString()} ${date.toLocaleTimeString()}`;
  }

  useEffect(() => {
    if (initialRender) {
      if (searchterm.length !== 0) {
        fetch(
          `https://api.weatherapi.com/v1/current.json?key=b20c01555bb54eeea2f122344221502&q=${searchterm}&aqi=no`
        )
          .then((response) => response.json())
          .then((forecast) => {
            setWeather({
              date: getDate(),
              condition: forecast.current.condition.text,
              icon: forecast.current.condition.icon,
              temp: forecast.current.temp_c,
              name: forecast.location.name,
              country: forecast.location.country,
              isDay: forecast.current.is_day,
            });
            setDisplay(true);
          });
      }
    }
    setInitialRender(false);
  }, [searchterm, setWeather]);

  const handleInput = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchterm(term);
    setInitialRender(true);
  };

  // console.log(weather);

  return (
    <div className="App">
      <Form handleInput={handleInput} handleSubmit={handleSubmit} />
      {display && <CurrentWeather weather={weather} />}
      {display && <History searchterm={searchterm} weather={weather} />}
    </div>
  );
};

export default App;
