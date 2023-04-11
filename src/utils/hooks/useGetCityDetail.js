import { useQuery } from "react-query";
import { getCityDetail } from "../services/api";

export default function useGetCityDetail(queryKey, cityName, countryCode) {
  const { data, isLoading, isError } = useQuery(
    queryKey,
    () => getCityDetail(cityName, countryCode),
    {
      enabled: !!cityName && !!countryCode,
    }
  );

  return { cityDetail: data, isLoading, isError };
}
