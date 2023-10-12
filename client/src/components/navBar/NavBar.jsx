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
  userName,
  openModalForm,
}) => {
  const onClickHandler = () => {
    setShowAllDrivers(false); //vuelve a mostrar todos los drivers
  };

  const onClickNavLinkHandler = () => {
    openModalForm();
    setShowAllDrivers(true);
  };

  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        {showAllDrivers && (
          <div>
            <button onClick={onClickHandler}>Volver</button>
          </div>
        )}
        <div>
          <h2 className={style.h2}>Hola {userName}!</h2>
        </div>
        <div className={style.createLink}>
          <NavLink
            className={style.createLink}
            to="#"
            onClick={onClickNavLinkHandler}
          >
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
    </div>
  );
};

export default NavBar;
