import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCountryCityList } from "../../utils/redux/actions/cityAction";
import Layout from "../../components/Layout";
import Header from "../../components/Header";

export default function WeatherList() {
  const { getDataListCityResult: indonesiaResult } = useSelector(
    (state) => state.CityReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // to make null indonesia result
    dispatch(deleteCountryCityList());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Layout title="ini test juga">
        {indonesiaResult.map((item, i) => {
          return (
            <>
              <h1>{item.name}</h1>
            </>
          );
        })}
      </Layout>
    </>
  );
}
