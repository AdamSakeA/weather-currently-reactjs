import {
  GET_COUNTRY_CITY_LIST,
  DELETE_COUNTRY_CITY_LIST,
} from "../../actions/cityAction";

const initialState = {
  getDataListCityResult: [],
  getDataListCityLoading: false,
  getDataListCityError: false,
};

const city = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_CITY_LIST:
      return {
        ...state,
        getDataListCityResult: [
          ...state.getDataListCityResult,
          action.payload.data,
        ],
        getDataListCityLoading: action.payload.loading,
        getDataListCityError: action.payload.errorMessage,
      };
    case DELETE_COUNTRY_CITY_LIST:
      return {
        ...state,
        getDataListCityResult: action.payload.data,
      };
    default:
      return state;
  }
};

export default city;
