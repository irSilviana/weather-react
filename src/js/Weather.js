import React from "react";

export default function Weather(props) {
  if (props.details) {
    return (
      <div className="Weather">
        <ul>
          <li>Temperature: {Math.round(props.details.temperature)}°C</li>
          <li>Description: {props.details.description}</li>
          <li>Humidity: {props.details.humidity}%</li>
          <li>Wind: {props.details.wind}km/h</li>
          <li>
            <img src={props.details.icon} alt={props.details.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return "";
  }
}
