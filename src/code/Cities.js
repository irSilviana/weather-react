import React from "react";

function Cities(props) {
  let city = "";
  let searchByCity = props.searchByCity;

  function chooseCity(event) {
    event.preventDefault();
    city = event.target.innerHTML;
    searchByCity(city);
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <ul className="cities">
                <li>
                  <a href="#Jakarta" onClick={chooseCity}>
                    Jakarta
                  </a>
                </li>
                &nbsp;|&nbsp;
                <li>
                  <a href="#London" onClick={chooseCity}>
                    London
                  </a>
                </li>
                &nbsp;|&nbsp;
                <li>
                  <a href="#Paris" onClick={chooseCity}>
                    Paris
                  </a>
                </li>
                &nbsp;|&nbsp;
                <li>
                  <a href="#Moscow" onClick={chooseCity}>
                    Moscow
                  </a>
                </li>
                &nbsp;|&nbsp;
                <li>
                  <a href="#New York" onClick={chooseCity}>
                    New York
                  </a>
                </li>
                &nbsp;|&nbsp;
                <li>
                  <a href="#Krakow" onClick={chooseCity}>
                    Krakow
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cities;
