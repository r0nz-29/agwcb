import {combineReducers} from "redux";
import langsReducer from "./languages/reducer";

const rootReducer = combineReducers({
  languages: langsReducer,
});

export default rootReducer;