import React, { useState } from "react";
import Search from "./Search";
import "./Cities.css";

export default function Cities() {
  let [searching, setSearching] = useState(<Search city="chicago" />);

  function chooseCity(event) {
    event.preventDefault();
    let selectedCity = event.target.innerHTML;
    console.log(selectedCity);
    setSearching(<Search city={selectedCity} />);

    console.log(searching);
  }

  let cities = (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <ul className="cities">
              <li>
                <a href="/" onClick={chooseCity}>
                  Jakarta
                </a>
              </li>
              &nbsp;|&nbsp;
              <li>
                <a href="/" onClick={chooseCity}>
                  London
                </a>
              </li>
              &nbsp;|&nbsp;
              <li>
                <a href="/" onClick={chooseCity}>
                  Paris
                </a>
              </li>
              &nbsp;|&nbsp;
              <li>
                <a href="/" onClick={chooseCity}>
                  New York
                </a>
              </li>
              &nbsp;|&nbsp;
              <li>
                <a href="/" onClick={chooseCity}>
                  San Francisco
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="Cities">
      {cities}
      {/* Search Form */}
      {searching}
    </div>
  );
}
