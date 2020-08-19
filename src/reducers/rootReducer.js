import { combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { itemReducer } from "../reducers/itemReducer";

export default combineReducers({
  authReducer,
  itemReducer,
});
