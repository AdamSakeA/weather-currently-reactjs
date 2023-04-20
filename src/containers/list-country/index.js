import { useState } from "react";

// components
import { CardCountry, CardCity } from "../../components";

// styles
import {
  CitiesSideBar,
  Container,
  Contents,
  CountrySideBar,
} from "./list-country.styles";

export default function ListCountry({ payload }) {
  const [id, setId] = useState(0);

  const citiesFilter = payload[id];

  const showCities = (idx) => {
    setId(idx);
  };

  return (
    <Container>
      <Contents>
        <CountrySideBar>
          {payload?.map((item, idx) => {
            return (
              <div className={`country ${id === idx && "active"}`} key={idx}>
                <CardCountry
                  idx={idx}
                  id={id}
                  showCities={showCities}
                  countryName={item.country}
                  countryCode={item.iso2}
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
