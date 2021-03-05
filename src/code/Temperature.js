import React from "react";
import CityTime from "./CityTime";
import WeatherIcon from "./WeatherIcon";
import "./Temperature.css";

export default function Temperature(props) {
  if (props.details) {
    return (
      <div className="Temperature">
        <div className="row">
          {/* Left Side */}
          <div className="col">
            <CityTime city={props.details.city} date={props.details.date} />
          </div>
          {/* Right Side */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                {/* upper part */}
                <div className="row">
                  <div className="col temperature-section">
                    <div className="clearfix">
                      <div className="float-left">
                        <WeatherIcon code={props.details.icon} />
                      </div>
                      <div className="temperature-part">
                        <span>{Math.round(props.details.temperature)}</span>
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
                    <p className="description">{props.details.description}</p>
                    <ul className="weather">
                      <li>
                        Cloudines:{" "}
                        <span>{Math.round(props.details.cloudiness)}</span>%
                      </li>
                      <li>
                        Feels like:{" "}
                        <span>{Math.round(props.details.feelsLike)}</span>°
                      </li>
                      <li>
                        Humidity:{" "}
                        <span>{Math.round(props.details.humidity)}</span>%
                      </li>
                      <li>
                        Wind: <span>{Math.round(props.details.wind)}</span>
                        km/h
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
}
