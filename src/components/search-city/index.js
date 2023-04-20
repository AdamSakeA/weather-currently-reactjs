import {
  SearchContainer,
  Dropdown,
  ListItem,
  SearchForm,
} from "./search-city.styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function SearchCity(props) {
  const { setCityName, cityName, result, isLoading, isError } = props;

  // search on input and show dropdown content
  const onSearch = (e) => {
    if (e) e.preventDefault();
    const value = e.target.value;
    setCityName(value);
  };

  // clear input
  const onClear = () => {
    setCityName("");
  };

  // content dropdown
  let displayDropdown;
  if (!isLoading && !isError) {
    displayDropdown = <SearchDropdown result={result} />;
  } else if (isLoading || isError) {
    displayDropdown = (
      <SearchDropdown isLoading={isLoading} isError={isError} />
    );
  }

  return (
    <SearchContainer>
      <SearchForm>
        <input
          className="search-bar"
          type="text"
          onChange={onSearch}
          placeholder="Please input city name..."
          value={cityName}
        />
        <div>
          {cityName.length > 0 && (
            <AiOutlineCloseCircle
              className="icon-close"
              onClick={() => onClear()}
            />
          )}
        </div>
      </SearchForm>
      {displayDropdown}
    </SearchContainer>
  );
}

// search content
const SearchDropdown = ({ result, isLoading, isError }) => {
  const navigate = useNavigate();

  // direct params to weather/lat&lon
  const navigateToWeatherPage = (cityName, countryCode) => {
    const weatherDetailParams = `/weather/${cityName}/${countryCode}`;
    setTimeout(() => {
      navigate(weatherDetailParams);
    }, 300);
  };

  return (
    <Dropdown>
      {isError && <p>{isError}</p>}
      {isLoading && <p>Loading...</p>}
      {result &&
        result.map((item, i) => {
          return (
            <ListItem
              key={i}
              onClick={() => navigateToWeatherPage(item.name, item.country)}
            >
              <h3>{item.name}</h3>
              <div>
                <p>{item.country}</p>
                <p>{item.state || null}</p>
              </div>
            </ListItem>
          );
        })}
    </Dropdown>
  );
};
