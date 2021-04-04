import React, { useState } from "react";

function SearchForm(props) {
  let [city, setCity] = useState();
  let currentPosition = props.currentPosition;
  let searchByCity = props.searchByCity;

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
