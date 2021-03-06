import React, { useState } from "react";
import Search from "./Search";
import "./Cities.css";

export default function Cities() {
  let [begin, setBegin] = useState(true);
  let [searching, setSearching] = useState(null);

  function chooseCity(event) {
    event.preventDefault();
    let selectedCity = event.target.innerHTML;
    setSearching(selectedCity);
    setBegin(false);
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

  if (begin) {
    return (
      <div className="Cities">
        {cities}
        {/* Search Form */}
        <Search city="chicago" />
      </div>
    );
  } else {
    return (
      <div className="Cities">
        {cities}
        {/* Search Form */}
        <Search city={searching} />
      </div>
    );
  }
}
