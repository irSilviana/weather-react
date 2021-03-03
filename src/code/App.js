import React from "react";
import "./App.css";
import Cities from "./Cities";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";

// let background = {
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundImage: `url(${require("/images/background/10n@2x.png")} )`,
// };

//console.log(process.env.REACT_APP_WEATHER_API_KEY);

export default function App() {
  return (
    <div className="App" /* style={background} */>
      <div className="container">
        <div className="weather-page">
          <div className="weather-app">
            {/* List of Cities */}
            <Cities />
            {/* Search Form */}
            <Search city="New York" />
            {/* Main Body */}
            <Temperature />
            {/* Forecast */}
            <Forecast />
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
