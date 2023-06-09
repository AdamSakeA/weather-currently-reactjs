import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components";
import { DetailWeather } from "../../containers";

export default function DetailWeatherPage() {
  const { cityName, countryCode } = useParams();

  return (
    <Layout title={`Weather ${cityName}`}>
      <DetailWeather cityName={cityName} countryCode={countryCode} />
    </Layout>
  );
}
