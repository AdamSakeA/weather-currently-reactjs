import React from "react";
import { CardCountrySkeleton, CardCitySkeleton } from "../../components";
import {
  Container,
  Contents,
  CountrySideBar,
  CitiesSideBar,
} from "./loadingListCountry.styles";

export default function LoadingListCountry() {
  return (
    <Container>
      <Contents>
        <CountrySideBar>
          <CardCountrySkeleton />
          <CardCountrySkeleton />
          <CardCountrySkeleton />
        </CountrySideBar>
        <CitiesSideBar>
          <h2>Loading..</h2>
          <CardCitySkeleton />
        </CitiesSideBar>
      </Contents>
    </Container>
  );
}
