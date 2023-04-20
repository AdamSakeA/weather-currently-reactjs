import React, { useState } from "react";
// components
import { SearchCity } from "../../components";

// hooks
import { useGetCityList } from "../../utils/hooks";

// styles
import { Container, Title } from "./list-search.styles";

export default function ListSearch() {
  const [cityName, setCityName] = useState("");

  const { cityList, isLoading, isError } = useGetCityList(cityName, cityName);
  return (
    <Container>
      <Title>Search your city to check current weather</Title>
      <SearchCity
        cityName={cityName}
        setCityName={setCityName}
        result={cityList}
        isLoading={isLoading}
        isError={isError}
      />
    </Container>
  );
}
