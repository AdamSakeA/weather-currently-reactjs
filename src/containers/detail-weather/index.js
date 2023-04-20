import React from "react";
import { useNavigate } from "react-router-dom";

// hooks
import { useGetCityDetail } from "../../utils/hooks";

// component
import { TimeZone, CardWeather, CardTemperature } from "../../components";

// styles
import { Container } from "./detail-weather.styles";

export default function DetailWeather({ cityName, countryCode }) {
  const { cityDetail, isLoading, isError } = useGetCityDetail(
    `cityDetail`,
    cityName,
    countryCode
  );
  const navigate = useNavigate();

  // error handler (boolean)
  const cityNotFound = cityDetail === "city not found";

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Wrong..</p>;
  if (cityNotFound)
    return (
      <div>
        <button onClick={() => navigate(-1)}>go back</button>
        <h1>{`We are sorry ${cityDetail}`}</h1>
      </div>
    );

  return (
    <Container>
      <button onClick={() => navigate(-1)}>go back</button>
      <div>
        <h1>{cityDetail?.name}</h1>
        <TimeZone />
      </div>
      <div>
        <CardWeather payload={cityDetail?.weather} />
      </div>
      <div>
        <CardTemperature payload={cityDetail?.main} />
      </div>
    </Container>
  );
}
