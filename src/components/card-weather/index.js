import React from "react";

import IconLoader from "../icon-loader";

export default function CardWeather({ payload }) {
  return (
    <>
      {payload?.map((item, i) => {
        return (
          <div key={i}>
            <IconLoader iconId={item.icon} />
            <h1>{item.main}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
}
