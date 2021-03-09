import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    return `${hour}:00`;
  }
  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature} °C`;
  }

  return (
    <div className="ForecastPreview col" key={props.data.toString()}>
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
