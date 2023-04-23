import React, { useState } from "react";

// components
import { Layout, SearchCountry } from "../../components";
import { Wrapper } from "./country.styles";

// containers
import { ListCountry, LoadingListCountry } from "../../containers";

// hooks
import { useGetCountryCityList } from "../../utils/hooks";

export default function NationPage() {
  const { countryList, isLoading, isError } = useGetCountryCityList("list");
  const [countryName, setCountryName] = useState("");
  const countryFiltered = countryList?.data?.filter((country) =>
    country.country.includes(countryName)
  );

  const CountryContents = () => {
    if (isLoading) return <LoadingListCountry />;
    if (isError) return <p>Something Wrong...</p>;
    if (countryName.length > 0) {
      return <ListCountry payload={countryFiltered} />;
    } else {
      return <ListCountry payload={countryList?.data} />;
    }
  };

  return (
    <Layout title="Country List">
      <Wrapper>
        <h1 className="title">Search your Country</h1>
        <p className="paragraph">Click the city for weather detail</p>
      </Wrapper>
      <h3>Country List</h3>
      <SearchCountry
        countryName={countryName}
        setCountryName={setCountryName}
      />
      <CountryContents />
    </Layout>
  );
}
