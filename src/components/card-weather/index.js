import React from "react";

import IconLoader from "../icon-loader";

export default function CardWeather({ payload }) {
  const { icon, main, description } = payload[0];
  return (
    <div>
      <IconLoader iconId={icon} />
      <h1>{main}</h1>
      <p>{description}</p>
    </div>
  );
}
