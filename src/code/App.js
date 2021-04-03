import React from "react";
import "./App.css";
import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";
import background from "./images/background/01d@2x.png";

// let background = {
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundImage: `url(${require("./images/background/10n@2x.png")} )`,
// };

export default function App() {
  let imageUrl = background;

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="weather-page">
          <div className="weather-app">
            <Header />
            {/* <Cities/> */}
            <Weather city="chicago" />
            {/* Main Body */}
            {/* <Temperature /> */}
            {/* <Forecast /> */}
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
