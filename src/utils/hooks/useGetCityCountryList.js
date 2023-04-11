import React from "react";
import { useQuery } from "react-query";
import { getCityCountryList } from "../services/api";

export default function useGetCityCountryList(queryKey, cityName, countryCode) {
  const { data, isLoading, isError } = useQuery(
    queryKey,
    () => getCityCountryList(cityName, countryCode),
    {
      enabled: !!cityName && !!countryCode,
    }
  );

  return { cityCountryList: data, isLoading, isError };
}
