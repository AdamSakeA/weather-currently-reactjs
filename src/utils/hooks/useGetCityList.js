import { useQuery } from "react-query";
import { getCityListBySearch } from "../services/api";

export default function useGetCityList(queryKey = "", cityName = "") {
  const { data, isLoading, isError } = useQuery(
    queryKey,
    () => getCityListBySearch(cityName),
    { enabled: !!cityName }
  );

  return { cityList: data, isLoading, isError };
}
