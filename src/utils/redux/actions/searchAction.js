import axios from "axios";

// dataURL with geocode search limit 5
const weatherURL = (cityName) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;
  return url;
};

// dataURL with detail
const detailWeatherURL = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
  return url;
};

// for action type in redux switch case
export const GET_DATA_CITY_NAME = "GET_DATA_CITY_NAME";
export const GET_DATA_CITY_DETAIL = "GET_DATA_CITY_DETAIL";

// get data weather by city name
export const getDataCity = (city) => {
  return (dispatch) => {
    dispatch({
      type: GET_DATA_CITY_NAME,
      // data weather
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // getAPI by city name
    axios({
      method: "GET",
      url: weatherURL(city),
    })
      // get api success
      .then((response) => {
        dispatch({
          type: GET_DATA_CITY_NAME,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      //   get api error / failed
      .catch((error) => {
        dispatch({
          type: GET_DATA_CITY_NAME,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        });
      });
  };
};

// get data weather
export const getDataCityDetail = (lat, lon) => {
  return (dispatch) => {
    dispatch({
      type: GET_DATA_CITY_DETAIL,
      // data weather
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // getAPI by city name
    axios({
      method: "GET",
      url: detailWeatherURL(lat, lon),
    })
      // get api success
      .then((response) => {
        dispatch({
          type: GET_DATA_CITY_DETAIL,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      //   get api error / failed
      .catch((error) => {
        dispatch({
          type: GET_DATA_CITY_DETAIL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.message,
          },
        });
      });
  };
};
