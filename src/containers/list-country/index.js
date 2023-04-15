import React from "react";
import { useState } from "react";

import { CardCountry, CardCity } from "../../components";
import {
  Container,
  SideBar,
  Content,
  CountrySideBar,
} from "./list-country.styles";

export default function ListCountry({ payload, isLoading, isError }) {
  const [id, setId] = useState(0);

  const citiesFilter = payload?.data[id];
  // <CardCity cityName={payload?.data[id]} />;
  const showCities = (idx) => {
    setId(idx);
  };

  return (
    <>
      <h1>Search your Country</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something wrong...</p>}
      <Container>
        <SideBar>
          <h2>Country List</h2>
          <CountrySideBar>
            {payload?.data?.map((item, idx) => {
              return (
                <div className="country" key={idx}>
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
        </SideBar>
        <Content>
          <CardCity cityName={citiesFilter} />
        </Content>
      </Container>
    </>
  );
}
