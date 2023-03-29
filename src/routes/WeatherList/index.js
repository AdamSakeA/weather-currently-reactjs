import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCountryCityList } from "../../utils/redux/actions/cityAction";

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
    <div>
      {indonesiaResult.map((item, i) => {
        return (
          <>
            <h1>{item.name}</h1>
          </>
        );
      })}
    </div>
  );
}
