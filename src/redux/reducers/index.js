import { combineReducers } from "redux";

import { getCars } from "./carReducers";

const reducers = combineReducers({
  Cars: getCars,
});

export default reducers;
