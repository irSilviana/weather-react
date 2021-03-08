import React from "react";
import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

// let background = {
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundImage: `url(${require("/images/background/10n@2x.png")} )`,
// };

export default function App() {
  return (
    <div className="App" /* style={background} */>
      <div className="container">
        <div className="weather-page">
          <div className="weather-app">
            {/* List of Cities */}
            <Search city="chicago" />
            {/* Main Body */}
            {/* <Temperature /> */}
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
