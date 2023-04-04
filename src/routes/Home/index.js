import React, { useRef, useCallback } from "react";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataCity,
  getDataCityDetail,
} from "../../utils/redux/actions/searchAction";
import { useNavigate } from "react-router-dom";
import WorldForecast from "./WorldForecast";
import { Wrapper, Title, Paragraph } from "./home.styles";
import Layout from "../../components/Layout";

export default function Home() {
  const {
    getDataCityByNameResult: cityResult,
    getDataCityByNameError: cityError,
    getDataCityByNameLoading: cityLoading,
  } = useSelector((state) => state.SearchReducer);
  const dispatch = useDispatch();
  const inputValueRef = useRef("");
  const navigate = useNavigate();

  // input search in home content and pass value to search components
  const inputValue = useCallback(
    (value) => {
      inputValueRef.current = value;
      dispatch(getDataCity(value));
    },
    [dispatch]
  );

  // direct params to weather/lat&lon
  const navigateToWeatherPage = (lat, lon) => {
    const weatherDetailParams = `/weather/${lat}&${lon}`;
    navigate(weatherDetailParams);
  };

  // click on search dropdown to get detail city with lat & lon
  const handleClickOnDropdown = (lat, lon) => {
    dispatch(getDataCityDetail(lat, lon));
    navigateToWeatherPage(lat, lon);
  };

  return (
    <Layout title="ini home">
      <Wrapper>
        <Title>Provide you a world wide weather forecast currently</Title>
        <Paragraph>
          The world forecaster weather,
          <br /> it's easy to use, to know, to have in your current location to
          know.
        </Paragraph>
      </Wrapper>
      <Search
        getClick={handleClickOnDropdown}
        getInput={inputValue}
        result={cityResult}
        loading={cityLoading}
        error={cityError}
      />
      <WorldForecast />
    </Layout>
  );
}
