import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middleWare = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
