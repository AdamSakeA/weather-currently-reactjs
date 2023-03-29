import { combineReducers } from "redux";
import SearchReducer from "./search";
import CityReducer from "./city";

export default combineReducers({ SearchReducer, CityReducer });
