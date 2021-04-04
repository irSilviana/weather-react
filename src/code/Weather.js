import React, { useState } from "react";
import axios from "axios";
import Cities from "./Cities";
import SearchForm from "./SearchForm";
import Temperature from "./Temperature";
import WeatherForecast from "./WeatherForecast";
import Loading from "./Loading";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let unit = "metric";
  let city = props.city;

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

  function searchByCity(city) {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    let url = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrl = `${url}q=${city}&appid=${apiKey}&units=${unit}`;

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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Cities searchByCity={searchByCity} />
        <div className="row">
          <div className="col">
            <SearchForm
              showTemperature={showTemperature}
              searchByCity={searchByCity}
              unit={unit}
            />
            <Temperature details={weatherData} unit={unit} />
            <WeatherForecast city={weatherData.city} unit={unit} />
          </div>
        </div>
      </div>
    );
  } else {
    searchByCity(city);
    return (
      <div className="Weather">
        <Cities searchByCity={searchByCity} />
        <div className="row">
          <div className="col">
            <SearchForm
              showTemperature={showTemperature}
              searchByCity={searchByCity}
              unit={unit}
            />
            <Loading />
          </div>
        </div>
      </div>
    );
  }
}
