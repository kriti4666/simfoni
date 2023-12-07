import { combineReducers } from "redux";
import { getSlideImageReducer, getProductDataReducer } from "./reducer";
export const rootReducer = combineReducers({
  getSlideImageReducer,
  getProductDataReducer,
});
