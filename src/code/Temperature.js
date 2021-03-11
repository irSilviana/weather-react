import React from "react";
import CityTime from "./CityTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Temperature.css";
//import background from "./images/background/01d@2x.png";

export default function Temperature(props) {
  // let imageUrl = `${background}/${props.details.icon}@2x.png`;

  if (props.details) {
    return (
      <div
        className="Temperature"
        // style={{
        //   backgroundImage: `url(${imageUrl})`,
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="row">
          {/* Left Side */}
          <div className="col">
            <CityTime
              city={props.details.city}
              date={props.details.date}
              country={props.details.country}
            />
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
                      <WeatherTemperature celcius={props.details.temperature} />
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
