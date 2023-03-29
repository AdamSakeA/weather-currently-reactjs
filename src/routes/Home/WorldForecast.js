// worldfourcast contents
import { useSelector, useDispatch } from "react-redux";
import { getCountryCityList } from "../../utils/redux/actions/cityAction";
import { useNavigate } from "react-router-dom";

const listCity = {
  indonesia: {
    code: "ID",
    city: ["Bekasi", "Jakarta", "Bandung", "Bali", "Depok", "Tambun"],
  },
};

export default function WorldForecast() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   navigate to WeatherList page
  const navigateToListCityPage = (country) => {
    const listCityNationParams = `/weather/${country}/list`;
    navigate(listCityNationParams);
  };

  //   get country city list
  const getCityList = (cityList, countryCode) => {
    cityList.forEach((item) => dispatch(getCountryCityList(item, countryCode)));
    navigateToListCityPage(countryCode);
  };

  return (
    <div>
      <h1>World Forecast</h1>
      <div>
        <div
          onClick={() =>
            getCityList(listCity.indonesia.city, listCity.indonesia.code)
          }
        >
          <h3>INDONESIA</h3>
          <p>ID</p>
        </div>
        <div>
          <h3>FRANCE</h3>
          <p>FR</p>
        </div>
      </div>
    </div>
  );
}
