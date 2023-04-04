import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

export default function DetailWeather() {
  const {
    getDataCityDetailResult: cityDetailResult,
    getDataCityDetailLoading,
    getDataCityDetailError,
  } = useSelector((state) => state.SearchReducer);

  return (
    <>
      <Header />
      <Layout title="ini test">
        <h2>{cityDetailResult.name}</h2>
      </Layout>
    </>
  );
}
