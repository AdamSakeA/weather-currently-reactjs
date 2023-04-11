import {
  SearchContainer,
  Input,
  Dropdown,
  ListItem,
  SearchForm,
} from "./search.styles";
import { useNavigate } from "react-router-dom";

export default function Search(props) {
  const { setCityName, cityName, result, isLoading, isError } = props;

  const onSearch = (e) => {
    if (e) e.preventDefault();
    const value = e.target.value;
    setCityName(value);
  };

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
        <Input
          className="search-bar"
          type="text"
          onChange={onSearch}
          value={cityName}
        />
        {displayDropdown}
      </SearchForm>
    </SearchContainer>
  );
}

// search content
const SearchDropdown = ({ result, isLoading, isError }) => {
  const navigate = useNavigate();

  // direct params to weather/lat&lon
  const navigateToWeatherPage = (cityName, countryCode) => {
    // console.log(result);
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
