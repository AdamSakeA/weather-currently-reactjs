import React from "react";

// components
import { Layout } from "../../components";
import { Wrapper } from "./country.styles";
// containers
import { ListCountry } from "../../containers";
// hooks
import { useGetCountryCityList } from "../../utils/hooks";

export default function NationPage() {
  const { countryList, isLoading, isError } = useGetCountryCityList("list");

  return (
    <Layout title="ini nation page">
      <Wrapper>
        <h1 className="title">Search your Country</h1>
        <p className="paragraph">Click the city for weather detail</p>
      </Wrapper>
      <ListCountry
        payload={countryList}
        isLoading={isLoading}
        isError={isError}
      />
    </Layout>
  );
}
