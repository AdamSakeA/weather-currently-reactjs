import axios from "axios";

const weatherURL = (cityName, countryCode) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=b2d245f9b06511c71dbd72708bbfbb4e`;
  return url;
};

export const GET_COUNTRY_CITY_LIST = "GET_COUNTRY_CITY_LIST";
export const DELETE_COUNTRY_CITY_LIST = "DELETE_COUNTRY_CITY_LIST";

export const getCountryCityList = (cityName, countryCode) => {
  return (dispatch) => {
    dispatch({
      type: GET_COUNTRY_CITY_LIST,
      // data indonesia city
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: weatherURL(cityName, countryCode),
    })
      // success getAPI
      .then((response) => {
        dispatch({
          type: GET_COUNTRY_CITY_LIST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      // failed getAPI
      .catch((error) => {
        dispatch({
          type: GET_COUNTRY_CITY_LIST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        });
      });
  };
};

export const deleteCountryCityList = () => {
  return (dispatch) => {
    dispatch({
      type: DELETE_COUNTRY_CITY_LIST,
      payload: {
        loading: false,
        data: [],
        errorMessage: false,
      },
    });
  };
};
