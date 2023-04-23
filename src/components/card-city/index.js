import { useNavigate } from "react-router-dom";

import { CityContainer, CityList, City } from "./card-city.styles";

function CardCity({ cities }) {
  const navigate = useNavigate();

  const navigateToWeatherDetailPage = (cityName) => {
    const countryCode = cities.countryCode;
    const weatherDetailParams = `/weather/${cityName}/${countryCode}`;
    navigate(weatherDetailParams);
  };

  if (!cities.countryName) {
    return (
      <CityContainer>
        <h2>Please choose country</h2>
      </CityContainer>
    );
  }

  return (
    <CityContainer>
      <h2>Cities of {cities.countryName}</h2>
      <CityList>
        {cities?.cities?.map((item, i) => {
          return (
            <City key={i} onClick={() => navigateToWeatherDetailPage(item)}>
              <p>{item}</p>
            </City>
          );
        })}
      </CityList>
    </CityContainer>
  );
}

export default CardCity;
