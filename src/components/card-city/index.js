import { useNavigate } from "react-router-dom";

import { CityContainer, CityList, City } from "./card-city.styles";

function CardCity({ cityName }) {
  const navigate = useNavigate();
  const countryName = cityName?.country;

  const navigateToWeatherDetailPage = (cityName, countryCode) => {
    const weatherDetailParams = `/weather/${cityName}/${countryCode}`;
    navigate(weatherDetailParams);
  };

  return (
    <CityContainer>
      <h2>Cities of {countryName}</h2>
      <CityList>
        {cityName?.cities?.map((item, i) => {
          return (
            <City
              key={i}
              onClick={() => navigateToWeatherDetailPage(item, cityName?.iso2)}
            >
              <p>{item}</p>
            </City>
          );
        })}
      </CityList>
    </CityContainer>
  );
}

export default CardCity;
