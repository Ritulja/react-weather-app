import React from "react";
import MainDate from "./MainDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          <MainDate date={props.data.date} />
        </li>
        <li className="text-capitalize"> {props.data.description} </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            class="wob_tci"
            alt={props.data.description}
            src={props.data.icon}
            id="wob_tci"
            data-atf="1"
            data-frt="0"
          />
          <span className="main-degree">
            {Math.round(props.data.temperature)}
          </span>
          <span className="celcius-degree">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humiduty: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
