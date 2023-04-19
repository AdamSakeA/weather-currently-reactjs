import axios from "axios";
import config from "./config";

// open weather to get detail weather
const Api = axios.create({
  baseURL: config.apiURL,
  headers: { "Content-Type": "application/json" },
});

// postman docs to get list country
const ApiCountry = axios.create({
  baseURL: config.listCountryURL,
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

export const getCountryCityListApi = async () => {
  try {
    const response = await ApiCountry.get();
    return response.data;
  } catch (error) {
    return error.response.data.data.error;
  }
};
