import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDailyForecast.css";

export default function WeatherDailyForecast() {
  return (
    <div className="WeatherDailyForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherDailyForecast-day">Fri</div>
          <WeatherIcon code="01d" size={32} />
          <span className="WeatherDailyForecast-max">19°</span>
          <span className="WeatherDailyForecast-min"> 10° </span>
        </div>
      </div>
    </div>
  );
}
