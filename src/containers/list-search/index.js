import React, { useState } from "react";
import { Search } from "../../components";
import { useGetCityList } from "../../utils/hooks";

export default function ListSearch() {
  const [cityName, setCityName] = useState("");

  const { cityList, isLoading, isError } = useGetCityList(cityName, cityName);
  return (
    <>
      <h1>Search your city to check current weather</h1>
      <Search
        cityName={cityName}
        setCityName={setCityName}
        result={cityList}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}
