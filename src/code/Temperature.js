import React from "react";
import "./Temperature.css";

export default function Temperature() {
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
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="scattered clouds"
                    id="icon"
                    className="float-left"
                  />
                  <div className="temperature-part">
                    <span id="temperature">32</span>
                    <span className="units">
                      <button href="#" id="toCelcius" className="active">
                        °C
                      </button>{" "}
                      |
                      <button href="#" id="toFahrenheit">
                        °F
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* lower part */}
            <div className="row">
              <div className="col">
                <p id="description">Scattered Clouds</p>
                <ul className="weather">
                  <li>
                    Cloudines: <span id="cloudines">40</span>%
                  </li>
                  <li>
                    Feels like: <span id="feels-like">35</span>°
                  </li>
                  <li>
                    Humidity: <span id="humidity">62</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">4</span>km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
