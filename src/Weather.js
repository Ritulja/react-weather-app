import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div
            className="col-9
  "
          >
            <input
              type="search"
              placeholder="Enter a city..."
              className="search-form"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 button-form"
            />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Monday 19:17</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            class="wob_tci"
            alt="Clear"
            src="//ssl.gstatic.com/onebox/weather/64/sunny.png"
            id="wob_tci"
            data-atf="1"
            data-frt="0"
          />
          <span className="main-degree">6 </span>
          <span className="celcius-degree">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humiduty: 58%</li>
            <li>Wind: 3mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
