import React from "react";

// hooks
import { useGetCityDetail } from "../../utils/hooks";

// component
import { TimeZone, CardWeather, CardTemperature } from "../../components";

import { Container } from "./detail-weather.styles";

export default function DetailWeather({ cityName, countryCode }) {
  const { cityDetail, isLoading, isError } = useGetCityDetail(
    `cityDetail`,
    cityName,
    countryCode
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Wrong..</p>;

  const { weather, main } = cityDetail;

  const HandleError = () => {
    return (
      <div>
        <h1>I'm sorry {cityDetail}</h1>
      </div>
    );
  };

  return (
    <Container>
      <div>
        {!cityDetail.name && <HandleError />}
        <h1>{cityDetail?.name || cityDetail}</h1>
        <TimeZone />
      </div>
      <div>
        <CardWeather payload={weather} />
      </div>
      <div>
        <CardTemperature payload={main} />
      </div>
    </Container>
  );
}
