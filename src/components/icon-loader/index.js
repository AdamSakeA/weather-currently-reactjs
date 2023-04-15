import React from "react";

const ICON_URL = "https://openweathermap.org/img/wn/";

export default function IconLoader({ iconId }) {
  const icon = `${ICON_URL}${iconId}@2x.png`;

  return (
    <div>
      <img src={icon} alt="weather-icon" />
    </div>
  );
}
