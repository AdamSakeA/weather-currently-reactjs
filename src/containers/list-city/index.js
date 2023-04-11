import { useNavigate } from "react-router-dom";

function ListCity({ cityName }) {
  const navigate = useNavigate();

  const navigateToWeatherDetailPage = (cityName, countryCode) => {
    const weatherDetailParams = `/weather/${cityName}/${countryCode}`;
    navigate(weatherDetailParams);
  };

  return (
    <>
      {cityName?.cities?.map((item, i) => {
        return (
          <div
            key={i}
            onClick={() => navigateToWeatherDetailPage(item, cityName?.iso2)}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </>
  );
}

export default ListCity;
