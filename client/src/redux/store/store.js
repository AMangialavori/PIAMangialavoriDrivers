import { applyMiddleware, createStore, compose } from "redux";
import reducer from "../reducer/reducer.js";
import thunkMiddleware from "redux-thunk";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  composeEnhacer(applyMiddleware(thunkMiddleware))
);

export default store;
