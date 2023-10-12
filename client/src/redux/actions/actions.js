import {
  CLEAN_DETAIL,
  FILTERED_TEAMS,
  GET_DRIVERS,
  GET_DRIVER_DETAIL,
  GET_TEAMS,
  SEARCH_BY_NAME,
  FILTERED_ORIGIN,
  ALPHABETIC_ORDER,
  DOB_ORDER,
  REMOVE_DRIVER,
} from "../actions/actionsTypes";

import axios from "axios";

export const getDrivers = () => {
  return async function (dispatch) {
    const URL = "http://localhost:3001/formula1/drivers";
    try {
      const result = await axios.get(`${URL}`);
      const allDrivers = result.data;
      if (!allDrivers) throw new Error("There are no drivers");
      dispatch({
        type: GET_DRIVERS,
        payload: allDrivers,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        `http://localhost:3001/formula1/drivers/detail/${id}`
      );
      const driverDetail = result.data;
      if (!driverDetail) throw new Error(`${id}not found`);
      dispatch({
        type: GET_DRIVER_DETAIL,
        payload: driverDetail,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const searchByName = (name) => {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        `http://localhost:3001/formula1/drivers?name=${name}`
      );
      const driversSameName = result.data;
      if (!driversSameName) throw new Error(`${name}not found`);
      dispatch({
        type: SEARCH_BY_NAME,
        payload: driversSameName,
      });
    } catch (error) {
      alert(`No se encontró ningún driver con el nombre: ${name}`);
    }
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getTeams = () => {
  return async function (dispatch) {
    try {
      const result = await axios.get("http://localhost:3001/formula1/teams/db");
      const allTeams = result.data;
      if (!allTeams) throw new Error("There are not teams");
      const allTeamsOrder = allTeams.sort((a, b) => a.localeCompare(b));
      dispatch({
        type: GET_TEAMS,
        payload: allTeamsOrder,
      });
    } catch (error) {
      alert("No se encontraron equipos");
    }
  };
};

//localCompare: Método para ordenar alfabeticamente-->retorna 1(t) o 0

export const removeDriver = (id) => {
  return async function (dispatch) {
    try {
      const result = await axios.delete(
        `http://localhost:3001/formula1/drivers/${id}`
      );
      const driverDeleted = result.data;
      if (!driverDeleted) throw new Error("Error al eliminar el driver");
      dispatch({
        type: REMOVE_DRIVER,
        payload: id,
      });
    } catch (error) {
      alert("Error al eliminar el driver");
    }
  };
};

export const filteredTeams = (team) => {
  return {
    type: FILTERED_TEAMS,
    payload: team,
  };
};

export const filteredOrigin = (origin) => {
  return {
    type: FILTERED_ORIGIN,
    payload: origin,
  };
};

export const alphabeticOrder = (order) => {
  return {
    type: ALPHABETIC_ORDER,
    payload: order,
  };
};

export const driversDobOrder = (dobOrder) => {
  return {
    type: DOB_ORDER,
    payload: dobOrder,
  };
};
