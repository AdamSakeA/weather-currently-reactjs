import React from "react";
import { useQuery } from "react-query";
import { getCityListApi } from "../services/api";

export default function useGetList(queryKey) {
  const { data, isLoading, isError } = useQuery(queryKey, () =>
    getCityListApi()
  );
  return { countryList: data, isLoading, isError };
}
