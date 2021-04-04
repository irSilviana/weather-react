import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState(props.unit);
  const weather = [{ unit: props.unit, temp: props.temperature }];
  let temperature = null;

  function updateWeather() {
    if (props.unit === "metric") {
      temperature = (props.temperature * 9) / 5 + 32;
      weather.push({ unit: "imperial", temp: temperature });
    } else if (props.unit === "imperial") {
      temperature = ((props.temperature - 32) * 5) / 9;
      weather.push({ unit: "metric", temp: temperature });
    }
  }
  updateWeather();

  function result() {
    let result = [];
    if (unit === "imperial") {
      for (let i = 0; i < weather.length; i++) {
        if (weather[i].unit === "imperial") {
          result.push(weather[i].temp);
        }
      }
      return result;
    } else if (unit === "metric") {
      for (let i = 0; i < weather.length; i++) {
        if (weather[i].unit === "metric") {
          result.push(weather[i].temp);
        }
      }
      return result;
    }
  }

  function setFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function setCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(result())}</span>
        <span className="units">
          <button href="#" className="active">
            °C
          </button>
          |
          <button href="#" onClick={setFahrenheit}>
            °F
          </button>
        </span>
      </div>
    );
  } else if (unit === "imperial") {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(result())}</span>
        <span className="units">
          <button href="#" onClick={setCelsius}>
            °C
          </button>{" "}
          |
          <button href="#" className="active">
            °F
          </button>
        </span>
      </div>
    );
  }
}
