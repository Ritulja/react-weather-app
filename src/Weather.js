import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      ready: true,
      humidity: response.data.main.humidity,
      date: "Monday 07:00",
      description: response.data.weather[0].description,
      icon: "//ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
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
        <h1> {weatherData.city} </h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize"> {weatherData.description} </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              class="wob_tci"
              alt={weatherData.description}
              src={weatherData.icon}
              id="wob_tci"
              data-atf="1"
              data-frt="0"
            />
            <span className="main-degree">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="celcius-degree">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humiduty: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "London";
    let apiKey = "2881e3d61ec2ba64d89fe66a778a8135";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
