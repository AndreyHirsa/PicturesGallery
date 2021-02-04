import { combineReducers } from "redux";  
import { errorMessageReducer } from "./errorMessageReducer";
import {loginReducer} from "./loginReducer"

export default combineReducers({
  errorMessageReducer,
  loginReducer
});
