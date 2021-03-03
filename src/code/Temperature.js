import React, { useState } from "react";
import axios from "axios";
import "./Temperature.css";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemperature(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      cloudiness: response.data.clouds.all,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Temperature">
        <div className="col">
          <div className="card">
            <div className="card-body">
              {/* upper part */}
              <div className="row">
                <div className="col temperature-section">
                  <div className="clearfix">
                    <img
                      src={weatherData.icon}
                      alt={weatherData.description}
                      className="float-left"
                    />
                    <div className="temperature-part">
                      <span>{Math.round(weatherData.temperature)}</span>
                      <span className="units">
                        <button href="#" className="active">
                          °C
                        </button>{" "}
                        |<button href="#">°F</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* lower part */}
              <div className="row">
                <div className="col">
                  <p>{weatherData.description}</p>
                  <ul className="weather">
                    <li>
                      Cloudines:{" "}
                      <span>{Math.round(weatherData.cloudiness)}</span>%
                    </li>
                    <li>
                      Feels like:{" "}
                      <span>{Math.round(weatherData.feelsLike)}</span>°
                    </li>
                    <li>
                      Humidity: <span>{Math.round(weatherData.humidity)}</span>%
                    </li>
                    <li>
                      Wind: <span>{Math.round(weatherData.wind)}</span>km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `125089b53f00feddd6fbd602dc6cec7a`;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showTemperature);
    return "Loading....";
  }
}
