import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <div className="col">
          3-hours Forecast <br />
          <div className="card">
            <div className="card-body">
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
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    let unit = "metric";
    let link = "https://api.openweathermap.org/data/2.5/forecast?";
    let apiUrl = `${link}q=${props.city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showForecast);
    return null;
  }
}
