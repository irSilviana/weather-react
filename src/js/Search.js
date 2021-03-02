import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState(null);
  let [weatherData, setWeatherData] = useState(null);

  function changeCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    let temperature = response.data.main.temp;
    let description = response.data.weather[0].main;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setWeatherData({ temperature, description, humidity, wind, icon });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = `125089b53f00feddd6fbd602dc6cec7a`;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showTemperature);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={changeCity} />
      <button type="submit">Search</button>
    </form>
  );

  if (weatherData) {
    return (
      <div className="Search">
        {form}
        <Weather details={weatherData} />
      </div>
    );
  } else {
    return <div className="Search">{form}</div>;
  }
}
