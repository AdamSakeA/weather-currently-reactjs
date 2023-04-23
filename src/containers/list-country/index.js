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
  const [citiesFilter, setCitiesFilter] = useState({
    countryCode: "",
    countryName: "",
    cities: [],
  });

  return (
    <Container>
      <Contents>
        <CountrySideBar>
          <CardCountry payload={payload} setCitiesFilter={setCitiesFilter} />
        </CountrySideBar>
        <CitiesSideBar>
          <CardCity cities={citiesFilter} />
        </CitiesSideBar>
      </Contents>
    </Container>
  );
}
