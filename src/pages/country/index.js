import React from "react";
import { Layout } from "../../components";
import { ListCountry } from "../../containers";
import { useGetList } from "../../utils/hooks";

export default function NationPage() {
  const { countryList, isLoading, isError } = useGetList("list");

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
