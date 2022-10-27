import React from "react";
import MainDate from "./MainDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";
import WeatherDailyForecast from "./WeatherDailyForecast";

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
          <WeatherIcon code={props.data.icon} size={52} />

          <WeatherTemp celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humiduty: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
      <WeatherDailyForecast />
    </div>
  );
}
