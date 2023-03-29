import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";

export default function DetailWeather() {
  const {
    getDataCityDetailResult: cityDetailResult,
    getDataCityDetailLoading,
    getDataCityDetailError,
  } = useSelector((state) => state.SearchReducer);

  return (
    <>
      <Header />
      <div>
        <h2>{cityDetailResult.name}</h2>
      </div>
    </>
  );
}
