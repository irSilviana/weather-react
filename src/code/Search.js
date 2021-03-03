import React from "react";

import "./Search.css";

export default function Search() {
  // const [ready, setReady] = useState(false);
  // let [city, setCity] = useState(null);
  // let [weatherData, setWeatherData] = useState(null);

  // function showTemperature(response) {
  //   let temperature = response.data.main.temp;
  //   let description = response.data.weather[0].main;
  //   let humidity = response.data.main.humidity;
  //   let wind = response.data.wind.speed;
  //   let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

  //   setWeatherData({ temperature, description, humidity, wind, icon });
  // }

  // function changeCity(event) {
  //   setCity(event.target.value);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //  let apiKey = `125089b53f00feddd6fbd602dc6cec7a`;
  //  let unit = "metric";
  //  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  //  axios.get(apiUrl).then(showTemperature);

  // }

  let form = (
    <form
      id="search-form"
      // onSubmit={handleSubmit}
    >
      <input
        type="search"
        id="input-city"
        className="form-control shadow-sm"
        placeholder="Enter a city"
        autoFocus="on"
        autoComplete="off"
        //        onChange={changeCity}
      />
      <input
        type="submit"
        className="btn btn-secondary shadow"
        value="Search"
      />
      <i className="fas fa-map-marker-alt" id="currentLocation"></i>
    </form>
  );

  return (
    <div className="Search">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">{form}</div>
          </div>
          {/* <Temperature details={weatherData} /> */}
        </div>
      </div>
    </div>
  );
}
