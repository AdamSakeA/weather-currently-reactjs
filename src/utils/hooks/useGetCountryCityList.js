import { useQuery } from "react-query";
import { getCountryCityListApi } from "../services/api";

export default function useGetCountryCityList(queryKey) {
  const { data, isLoading, isError } = useQuery(queryKey, () =>
    getCountryCityListApi()
  );
  return { countryList: data, isLoading, isError };
}
