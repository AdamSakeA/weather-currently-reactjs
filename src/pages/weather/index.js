import React from "react";
import { useParams } from "react-router-dom";
import { useGetCityDetail } from "../../utils/hooks";
import { Layout } from "../../components";

export default function DetailWeather() {
  const { cityName, countryCode } = useParams();
  const { cityDetail, isLoading, isError } = useGetCityDetail(
    `cityDetail`,
    cityName,
    countryCode
  );
  return (
    <>
      <Layout title="ini test">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something Wrong...</p>}
        <h2>{cityDetail?.name}</h2>
      </Layout>
    </>
  );
}
