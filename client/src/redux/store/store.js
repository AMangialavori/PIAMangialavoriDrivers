import { applyMiddleware, createStore, compose } from "redux";
import reducer from "../reducer/reducer.js";
import thunkMiddleware from "redux-thunk";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  composeEnhacer(applyMiddleware(thunkMiddleware))
);

//compose simplifica la composición de funciones, especialmente cuando se trabaja con varios middleware y potenciadores en una configuración de Redux.
//habilita la extensión Redux DevTools (si está disponible)
//Enhancers (mejoradores) que modifican el comportamiento del store
//thunkMiddleware permite gestionar acciones asincrónicas en Redux
//applyMiddleware permite el uso de middleware

export default store;
