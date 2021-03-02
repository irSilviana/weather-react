import React from "react";
import "./CityTime.css";

export default function CityTime() {
  return (
    <div className="CityTime">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h1 id="city">Jakarta, ID</h1>
            <ul className="datetime">
              <li id="last-update">Last updated:</li>
              <li id="day">Monday</li>
              <li id="date">22 Feb 2021</li>
              <li>
                <span id="clock">02:55</span> <span id="amPm">PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
