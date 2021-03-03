import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.city);

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      cloudiness: response.data.clouds.all,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function changeCity(event) {
    setCity(event.target.value.trim());
  }

  function searchByCity() {
    let apiKey = `125089b53f00feddd6fbd602dc6cec7a`;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city !== "") {
      searchByCity();
    } else {
      alert("Please enter a city!");
    }
  }

  let form = (
    <form id="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        id="input-city"
        className="form-control shadow-sm"
        placeholder="Enter a city"
        autoFocus="on"
        autoComplete="off"
        onChange={changeCity}
      />
      <input
        type="submit"
        className="btn btn-secondary shadow"
        value="Search"
      />
      <i className="fas fa-map-marker-alt" id="currentLocation"></i>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">{form}</div>
            </div>
            <Temperature details={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    searchByCity();
    return "Loading....";
  }
}
