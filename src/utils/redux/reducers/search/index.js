import {
  GET_DATA_CITY_NAME,
  GET_DATA_CITY_DETAIL,
} from "../../actions/searchAction";

const initialState = {
  getDataCityByNameResult: false,
  getDataCityByNameLoading: false,
  getDataCityByNameError: false,

  getDataCityDetailResult: false,
  getDataCityDetailLoading: false,
  getDataCityDetailError: false,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_CITY_NAME:
      return {
        ...state,
        getDataCityByNameResult: action.payload.data,
        getDataCityByNameLoading: action.payload.loading,
        getDataCityByNameError: action.payload.errorMessage,
      };
    case GET_DATA_CITY_DETAIL:
      return {
        ...state,
        getDataCityDetailResult: action.payload.data,
        getDataCityDetailLoading: action.payload.loading,
        getDataCityDetailError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default search;
