import React from "react";

// hooks
import { useGetCityDetail } from "../../utils/hooks";

// component
import { TimeZone, IconLoader } from "../../components";

export default function DetailWeather({ cityName, countryCode }) {
  const { cityDetail, isLoading, isError } = useGetCityDetail(
    `cityDetail`,
    cityName,
    countryCode
  );

  const icon = cityDetail?.weather?.map((item) => {
    return item.icon;
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something Wrong...</p>;

  const HandleError = () => {
    if (!cityDetail.name) {
      return (
        <div>
          <h1>I'm sorry {cityDetail}</h1>
        </div>
      );
    }
  };

  const NotError = () => {
    if (cityDetail.name) {
      return (
        <div>
          <h1>{cityDetail?.name || cityDetail}</h1>
          <TimeZone />
          <IconLoader iconId={icon} />
        </div>
      );
    }
  };

  return (
    <>
      <HandleError />
      <NotError />
    </>
  );
}
