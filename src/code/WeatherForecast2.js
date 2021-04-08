import React, { useState } from "react";
import HourlyForecast2 from "./HourlyForecast2";
import ForecastPreview2 from "./ForecastPreview2";
import axios from "axios";
import "./WeatherForecast2.css";

function WeatherForecast2(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let lon = props.coord.lon;
  let lat = props.coord.lat;
  let unit = props.unit;

  function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  function checkForecast() {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    let link = "https://api.openweathermap.org/data/2.5/onecall?";
    let apiUrl = `${link}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}&exclude=current,minutely,alerts`;

    axios.get(apiUrl).then(showForecast);
  }

  if (loaded && lat === forecast.lat && lon === forecast.lon)
    return (
      <div className="WeatherForecast2 row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p>Hourly Forecast</p>
                </div>
              </div>
              <div className="row">
                {forecast.hourly
                  .slice(0, 5)
                  .map(function (forecastItem, index) {
                    return <HourlyForecast2 data={forecastItem} key={index} />;
                  })}

                {/* <HourlyForecast2 data={forecast.hourly[0]} />
                <HourlyForecast2 data={forecast.hourly[1]} />
                <HourlyForecast2 data={forecast.hourly[2]} />
                <HourlyForecast2 data={forecast.hourly[3]} />
                <HourlyForecast2 data={forecast.hourly[4]} /> */}
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p>Daily Forecast</p>
                </div>
              </div>
              <div className="row">
                {forecast.daily.slice(0, 5).map(function (forecastItem, index) {
                  return <ForecastPreview2 data={forecastItem} key={index} />;
                })}

                {/* <ForecastPreview2 data={forecast.daily[0]} />
                <ForecastPreview2 data={forecast.daily[1]} />
                <ForecastPreview2 data={forecast.daily[2]} />
                <ForecastPreview2 data={forecast.daily[3]} />
                <ForecastPreview2 data={forecast.daily[4]} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else {
    checkForecast();
    return null;
  }
}

export default WeatherForecast2;
