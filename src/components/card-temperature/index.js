import React from "react";

export default function CardTemperature({ payload }) {
  return (
    <div>
      <h3>Feels Like : {payload.feels_like}</h3>
      <h3>Humidity : {payload.humidity} %</h3>
      <h3>Temp : {payload.temp}</h3>
    </div>
  );
}
