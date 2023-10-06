import {
  CLEAN_DETAIL,
  GET_DRIVERS,
  GET_DRIVER_DETAIL,
  SEARCH_BY_NAME,
  GET_TEAMS,
  FILTERED_TEAMS,
  FILTERED_ORIGIN,
  ALPHABETIC_ORDER,
  DOB_ORDER,
} from "../actions/actionsTypes";

const initialState = {
  drivers: [],
  driversCopy: [],
  driver_detail: [],
  teams: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: payload,
        driversCopy: payload,
      };
    case GET_DRIVER_DETAIL: {
      return {
        ...state,
        driver_detail: payload,
      };
    }
    case CLEAN_DETAIL: {
      return {
        ...state,
        driver_detail: [],
      };
    }
    case SEARCH_BY_NAME:
      return {
        ...state,
        drivers: payload,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: payload,
      };
    case FILTERED_TEAMS:
      const filteredTeams = state.driversCopy.filter((driver) => {
        if (typeof driver.teams === "string") {
          const driverTeams = driver.teams
            .split(",")
            .map((team) => team.trim());
          return driverTeams.includes(payload);
        }
      });
      return {
        ...state,
        drivers: filteredTeams,
      };
    case FILTERED_ORIGIN:
      const filteredOrigin = state.driversCopy.filter((driver) => {
        return payload === "originDB"
          ? driver.created === "true"
          : driver.created === "false";
      });
      return {
        ...state,
        drivers: filteredOrigin,
      };

    case ALPHABETIC_ORDER:
      const abcOrder = [...state.drivers];
      return {
        ...state,
        drivers:
          payload === "Az"
            ? abcOrder.sort((a, b) => a.surname.localeCompare(b.surname))
            : abcOrder.sort((a, b) => b.surname.localeCompare(a.surname)),
      };
    case DOB_ORDER:
      const dobOrder = [...state.drivers];
      return {
        ...state,
        drivers:
          payload === "dobUpward"
            ? dobOrder.sort(
                (a, b) => new Date(a.dob).getTime() - new Date(b.dob).getTime()
              )
            : dobOrder.sort(
                (a, b) => new Date(b.dob).getTime() - new Date(a.dob).getTime()
              ),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
