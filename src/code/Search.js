import React, { useState } from "react";
import axios from "axios";
import Temperature from "./Temperature";
import WeatherForecast from "./WeatherForecast";
import Loading from "./Loading";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.city);

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      cloudiness: response.data.clouds.all,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function changeCity(event) {
    setCity(event.target.value.trim());
  }

  function searchByCity() {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    // axios.get(apiUrl).then(showTemperature).catch(console.clear);

    axios
      .get(apiUrl)
      .then(showTemperature)
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.clear();
          alert("🌏 Please type the correct city name");
        }
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city !== "") {
      searchByCity();
    } else {
      alert("Please enter a city!");
    }
  }

  function currentPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let unit = "metric";
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showTemperature);
  }

  function showCurrentLocation() {
    navigator.geolocation.getCurrentPosition(currentPosition);
  }

  function chooseCity(event) {
    event.preventDefault();
    city = event.target.innerHTML;
    searchByCity();
  }

  let cities = (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <ul className="cities">
              <li>
                <a href="#Jakarta" onClick={chooseCity}>
                  Jakarta
                </a>
              </li>
              &nbsp;|&nbsp;
              <li>
                <a href="#London" onClick={chooseCity}>
                  London
                </a>
              </li>
              &nbsp;|&nbsp;
              <li>
                <a href="#Paris" onClick={chooseCity}>
                  Paris
                </a>
              </li>
              &nbsp;|&nbsp;
              <li>
                <a href="#Moscow" onClick={chooseCity}>
                  Moscow
                </a>
              </li>
              &nbsp;|&nbsp;
              <li>
                <a href="#New York" onClick={chooseCity}>
                  New York
                </a>
              </li>
              &nbsp;|&nbsp;
              <li>
                <a href="#Krakow" onClick={chooseCity}>
                  Krakow
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  let form = (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
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
          <i
            className="fas fa-map-marker-alt"
            onClick={showCurrentLocation}
          ></i>
        </form>
      </div>
    </div>
  );

  if (weatherData.ready) {
    return (
      <div className="Search">
        {cities}
        <div className="row">
          <div className="col">
            {form}
            <Temperature details={weatherData} />
            <WeatherForecast city={weatherData.city} />
          </div>
        </div>
      </div>
    );
  } else {
    searchByCity();
    return (
      <div className="Search">
        {cities}
        <div className="row">
          <div className="col">
            {form}
            <Loading />
          </div>
        </div>
      </div>
    );
  }
}
