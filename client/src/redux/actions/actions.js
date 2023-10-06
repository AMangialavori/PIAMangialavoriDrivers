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
      const result = await axios.get("http://localhost:3001/formula1/teams");
      const allTeams = result.data;
      if (!allTeams) throw new Error("There are not teams");

      dispatch({
        type: GET_TEAMS,
        payload: allTeams,
      });
    } catch (error) {
      alert("No se encontraron equipos");
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
// export const getDrivers = () => {
//   return async function (dispatch) {
//     const URL = "http://localhost:3001/formula1/drivers";
//     try {
//       const result = await axios.get(`${URL}`);
//       const allDrivers = result.data;
//       if (!allDrivers) throw new Error("There are no drivers");
//       const shuffledDrivers = shuffleArray(allDrivers);
//       const selectedDrivers = shuffledDrivers.slice(0, 55);
//       // console.log(selectedDrivers);
//       dispatch({
//         type: GET_DRIVERS,
//         payload: selectedDrivers,
//       });
//     } catch (error) {
//       return { error: error.message };
//     }
//   };
// };

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }
