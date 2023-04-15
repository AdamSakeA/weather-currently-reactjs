import React from "react";
import { Layout } from "../../components";
import { ListCountry } from "../../containers";
import { useGetCountryCityList } from "../../utils/hooks";

export default function NationPage() {
  const { countryList, isLoading, isError } = useGetCountryCityList("list");

  return (
    <Layout title="ini nation page">
      <ListCountry
        payload={countryList}
        isLoading={isLoading}
        isError={isError}
      />
    </Layout>
  );
}
