import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../searchBar/SearchBar";
import Selector from "../../components/selector/Selector";

const NavBar = ({
  setSearchName,
  setTeamSelector,
  setOriginSelector,
  setAbcOrder,
  setDobOrder,
  showAllDrivers,
  setShowAllDrivers,
}) => {
  const onClickHandler = () => {
    setShowAllDrivers(false);
  };

  return (
    <div className={style.mainContainer}>
      {showAllDrivers && (
        <div>
          <button onClick={onClickHandler}>Volver</button>
        </div>
      )}
      <div className={style.createLink}>
        <NavLink className={style.navLink} to="/form">
          Crear
        </NavLink>
      </div>
      <div className={style.searchBar}>
        <SearchBar setSearchName={setSearchName}></SearchBar>
      </div>
      <div className={style.selector}>
        <Selector
          setTeamSelector={setTeamSelector}
          setOriginSelector={setOriginSelector}
          setAbcOrder={setAbcOrder}
          setDobOrder={setDobOrder}
          setShowAllDrivers={setShowAllDrivers}
        ></Selector>
      </div>
    </div>
  );
};

export default NavBar;
