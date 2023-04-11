import React from "react";
import { useState } from "react";
import ListCity from "../list-city";

export default function ListCountry({ payload, isLoading, isError }) {
  const [id, setId] = useState();
  const citiesFilter = <ListCity cityName={payload?.data[id]} />;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something wrong...</p>}
      {citiesFilter}
      {/* {citiesFilter?.cities.map((item, i) => {
        return <ListCity cityName={item} />;
      })} */}
      {payload?.data?.map((item, idx) => {
        return (
          <div key={idx} onClick={() => setId(idx)}>
            <h3>{item.country}</h3>
            <p>{item.iso2}</p>
          </div>
        );
      })}
    </>
  );
}
