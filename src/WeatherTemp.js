import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFar(event) {
    setUnit("farenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="main-degree">{Math.round(props.celsius)}</span>
        <span className="celcius-degree">
          °C |
          <a href="/" onClick={convertToFar}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="main-degree">{Math.round(farenheit)}</span>
        <span className="celcius-degree">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
