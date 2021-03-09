import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(props.celcius)}</span>
        <span className="units">
          <button href="#" className="active">
            °C
          </button>
          |
          <button href="#" onClick={showFahrenheit}>
            °F
          </button>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="Temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <button href="#" onClick={showCelsius}>
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
