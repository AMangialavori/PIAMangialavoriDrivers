import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

//createRoot devuelve un objeto que representa la raíz de renderización.
//Provider proporciona acceso al estado global (almacenado en store) a todos los componentes de la aplicación descendientes.
//Este código configura y renderiza una aplicación React utilizando ReactDOM en su versión 18, proporciona acceso a Redux para la gestión del estado global y habilita la navegación basada en rutas mediante React Router. La aplicación principal se encuentra en el componente App, y el punto de entrada es el elemento con el id "root" en la página HTML.
