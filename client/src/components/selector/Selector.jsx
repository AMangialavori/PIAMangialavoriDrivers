import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTeams } from "../../redux/actions/actions";

const Selector = ({
  setTeamSelector,
  setOriginSelector,
  setAbcOrder,
  setDobOrder,
  setShowAllDrivers,
}) => {
  const dispatch = useDispatch();

  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const onChangeTeamshandler = (event) => {
    const allDrivers = event.target.value;
    if (allDrivers === "allDrivers") {
      setShowAllDrivers(false);
    } else {
      const selectedTeam = event.target.value;
      setTeamSelector(selectedTeam);
      setShowAllDrivers(true);
    }
  };

  // const onChangeTeamshandler = (event) => {
  //   const selectedTeam = event.target.value;
  //   setTeamSelector(selectedTeam);
  // };

  const onChangeDriversOriginHandler = (event) => {
    const allDrivers = event.target.value;
    if (allDrivers === "allDrivers") {
      setShowAllDrivers(false);
    } else {
      const selectedOrigin = event.target.value;
      setOriginSelector(selectedOrigin);
      setShowAllDrivers(true);
    }
  };

  const onChangeDriversAlphabeticOrder = (event) => {
    const abcOrder = event.target.value;
    setAbcOrder(abcOrder);
  };

  const onChangeDriversDobOrder = (event) => {
    const dobOrder = event.target.value;
    setDobOrder(dobOrder);
  };

  return (
    <div>
      <select onChange={onChangeTeamshandler}>
        {teams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
        <option value="allDrivers">Listado completo</option>
      </select>
      <select onChange={onChangeDriversOriginHandler}>
        <option value="originDB">Drivers creados</option>
        <option value="originApi">DriversApi</option>
        <option value="allDrivers">Listado completo</option>
      </select>
      <select onChange={onChangeDriversAlphabeticOrder}>
        <option value="Az">A-z</option>
        <option value="Za">Z-a</option>
      </select>
      <select onChange={onChangeDriversDobOrder}>
        <option value="dobUpward">DOB Ascendente</option>
        <option value="dobFalling">DOB Descendente</option>
      </select>
    </div>
  );
};
export default Selector;
