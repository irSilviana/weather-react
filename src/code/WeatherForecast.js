import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview";
import DailyForecast from "./DailyForecast";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  function checkForecast() {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    let unit = "metric";
    let link = "https://api.openweathermap.org/data/2.5/forecast?";
    let apiUrl = `${link}q=${props.city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showForecast);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p>3 Hour Forecast</p>
                </div>
              </div>
              <div className="row">
                {/* use this code */}
                {forecast.list.slice(0, 5).map(function (forecastItem) {
                  return <ForecastPreview data={forecastItem} />;
                })}

                {/* instead of these codes
                <ForecastPreview data={forecast.list[0]} />
                <ForecastPreview data={forecast.list[1]} />
                <ForecastPreview data={forecast.list[2]} />
                <ForecastPreview data={forecast.list[3]} />
                <ForecastPreview data={forecast.list[4]} />
                <ForecastPreview data={forecast.list[5]} /> */}
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p>Daily Forecast</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <DailyForecast data={forecast.list} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    checkForecast();
    return null;
  }
}
