import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
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
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humiduty: 58%</li>
            <li>Wind: 3mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
