import axios from "axios";
import config from "./config";

const Api = axios.create({
  baseURL: config.apiURL,
  headers: { "Content-Type": "application/json" },
  //   timeout: 5000,
});

const ApiList = axios.create({
  baseURL: "https://countriesnow.space/api/v0.1/countries",
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

export const getCityListBySearch = async (cityName) => {
  try {
    const response = await Api.get(
      `geo/1.0/direct?q=${cityName}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getCityDetail = async (cityName, countryCode) => {
  try {
    const response = await Api.get(
      `data/2.5/weather?q=${cityName},${countryCode}&appid=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getCityCountryList = async (cityName, countryCode) => {
  try {
    const response = await Api.get(
      `data/2.5/weather?q=${cityName},${countryCode}&appid=${process.env.REACT_APP_API_KEY}`
    );
    return [response.data];
  } catch (error) {
    return error.response.data.message;
  }
};

export const getCityListApi = async () => {
  try {
    const response = await ApiList.get();
    return response.data;
  } catch (error) {
    return error.response.data.data.error;
  }
};
