import React from "react";
import "./Cities.css";

export default function Cities() {
  return (
    <div className="Cities">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <ul className="cities">
                <li id="jakarta">Jakarta</li>&nbsp;|&nbsp;
                <li id="london">London</li>&nbsp;|&nbsp;
                <li id="paris">Paris</li>&nbsp;|&nbsp;
                <li id="newyork">New York</li>&nbsp;|&nbsp;
                <li id="sanfrancisco">San Francisco</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
