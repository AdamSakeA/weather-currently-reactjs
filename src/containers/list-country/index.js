import React, { useState } from "react";

// components
import { CardCountry, CardCity } from "../../components";

// styles
import {
  CitiesSideBar,
  Container,
  Contents,
  CountrySideBar,
  Title,
} from "./list-country.styles";

export default function ListCountry({ payload, isLoading, isError }) {
  const [id, setId] = useState(0);

  const citiesFilter = payload?.data[id];
  const showCities = (idx) => {
    setId(idx);
  };

  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something wrong...</p>}
      <Title>Country List</Title>
      <Contents>
        <CountrySideBar>
          {payload?.data?.map((item, idx) => {
            return (
              <div className={`country ${idx === id && "active"}`} key={idx}>
                <CardCountry
                  idx={idx}
                  id={id}
                  showCities={showCities}
                  countryName={item.country}
                  countryCode={item.iso2}
                  citiesFilter={citiesFilter}
                />
              </div>
            );
          })}
        </CountrySideBar>
        <CitiesSideBar>
          <CardCity cityName={citiesFilter} />
        </CitiesSideBar>
      </Contents>
    </Container>
  );
}
