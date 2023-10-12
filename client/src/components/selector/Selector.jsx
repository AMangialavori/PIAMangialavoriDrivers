import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./selector.module.css";

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
    <div className={style.selector}>
      <select className={style.select} onChange={onChangeTeamshandler}>
        {teams.map((team) => (
          <option className={style.option} key={team} value={team}>
            {team}
          </option>
        ))}
        <option className={style.option} value="allDrivers">
          Listado completo
        </option>
      </select>
      <select className={style.select} onChange={onChangeDriversOriginHandler}>
        <option className={style.option} value="originDB">
          Drivers creados
        </option>
        <option className={style.option} value="originApi">
          DriversApi
        </option>
        <option className={style.option} value="allDrivers">
          Listado completo
        </option>
      </select>
      <select
        className={style.select}
        onChange={onChangeDriversAlphabeticOrder}
      >
        <option className={style.option} value="Az">
          A-z
        </option>
        <option className={style.option} value="Za">
          Z-a
        </option>
      </select>
      <select className={style.select} onChange={onChangeDriversDobOrder}>
        <option className={style.option} value="dobUpward">
          Edad Ascendente
        </option>
        <option className={style.option} value="dobFalling">
          Edad Descendente
        </option>
      </select>
    </div>
  );
};
export default Selector;
