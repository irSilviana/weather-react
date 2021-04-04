import React, { useState } from "react";
import axios from "axios";

function SearchForm(props) {
  let [city, setCity] = useState();
  let showTemperature = props.showTemperature;
  let searchByCity = props.searchByCity;
  let unit = props.unit;

  function handleSubmit(event) {
    event.preventDefault();
    if (city !== "") {
      searchByCity(city);
    } else {
      alert("Please enter a city!");
    }
  }

  function changeCity(event) {
    setCity(event.target.value.trim());
  }

  function currentPosition(position) {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let url = "https://api.openweathermap.org/data/2.5/weather?";

    let apiUrl = `${url}lat=${lat}&lon=${long}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showTemperature);
  }

  function showCurrentLocation() {
    navigator.geolocation.getCurrentPosition(currentPosition);
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control shadow-sm"
              placeholder="Enter a city"
              autoFocus="on"
              autoComplete="off"
              onChange={changeCity}
            />
            <input
              type="submit"
              className="btn btn-secondary shadow"
              value="Search"
            />
            <i
              className="fas fa-map-marker-alt"
              onClick={showCurrentLocation}
            ></i>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
