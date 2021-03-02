import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row week-prediction">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="row" id="forecast">
                <div className="col">
                  <h3>Tue</h3>
                  <img
                    className="forecast"
                    src={"https://openweathermap.org/img/wn/04n@2x.png"}
                    alt=""
                  />
                  <span className="prediction">
                    <strong>32°</strong>/27°
                  </span>
                </div>
                <div className="col">
                  <h3>Wed</h3>
                  <img
                    className="forecast"
                    src={"https://openweathermap.org/img/wn/10d@2x.png"}
                    alt=""
                  />
                  <span className="prediction">
                    <strong>32°</strong>/27°
                  </span>
                </div>
                <div className="col">
                  <h3>Thu</h3>
                  <img
                    className="forecast"
                    src={"https://openweathermap.org/img/wn/04n@2x.png"}
                    alt=""
                  />
                  <span className="prediction">
                    <strong>32°</strong>/27°
                  </span>
                </div>
                <div className="col">
                  <h3>Fri</h3>
                  <img
                    className="forecast"
                    src={"https://openweathermap.org/img/wn/10d@2x.png"}
                    alt=""
                  />
                  <span className="prediction">
                    <strong>32°</strong>/27°
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
