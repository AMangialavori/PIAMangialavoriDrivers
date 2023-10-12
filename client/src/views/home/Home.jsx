import CardContainer from "../../components/cardContainer/CardContainer";
import NavBar from "../../components/navBar/NavBar";
import style from "./home.module.css";
import Modal from "../../components/modalPopUp/Modal";
import Form from "../form/Form";

import { useModal } from "../../hooks/useModal";

import {
  getDrivers,
  searchByName,
  filteredTeams,
  filteredOrigin,
  alphabeticOrder,
  driversDobOrder,
  removeDriver,
} from "../../redux/actions/actions";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ userName }) => {
  const dispatch = useDispatch();

  const [searchName, setSearchName] = useState("");

  const [teamSelector, setTeamSelector] = useState("");
  const [originselector, setOriginSelector] = useState("");

  const [abcOrder, setAbcOrder] = useState("");
  const [dobOrder, setDobOrder] = useState("");

  const [showAllDrivers, setShowAllDrivers] = useState(false);

  const [isOpenForm, openModalForm, closeModalForm] = useModal(false);

  const drivers = useSelector((state) => state.drivers);

  useEffect(() => {
    if (!showAllDrivers) {
      dispatch(getDrivers());
    }
  }, [showAllDrivers]);

  useEffect(() => {
    if (searchName) {
      dispatch(searchByName(searchName));
      setShowAllDrivers(true);
    }
  }, [searchName]);

  useEffect(() => {
    if (teamSelector) {
      dispatch(filteredTeams(teamSelector));
    }
  }, [teamSelector]);

  useEffect(() => {
    if (originselector) {
      dispatch(filteredOrigin(originselector));
    }
  }, [originselector]);

  useEffect(() => {
    if (abcOrder) {
      dispatch(alphabeticOrder(abcOrder));
    }
  }, [abcOrder]);

  useEffect(() => {
    if (dobOrder) {
      dispatch(driversDobOrder(dobOrder));
    }
  }, [dobOrder]);

  const handleDeleteDriver = (driverId) => {
    dispatch(removeDriver(driverId));
  };

  return (
    <div className={style.home}>
      <div>
        <NavBar
          setSearchName={setSearchName}
          setTeamSelector={setTeamSelector}
          setOriginSelector={setOriginSelector}
          setAbcOrder={setAbcOrder}
          setDobOrder={setDobOrder}
          setShowAllDrivers={setShowAllDrivers}
          showAllDrivers={showAllDrivers}
          userName={userName}
          openModalForm={openModalForm}
        ></NavBar>
      </div>
      <CardContainer
        drivers={drivers}
        handleDeleteDriver={handleDeleteDriver}
      ></CardContainer>
      <Modal isOpenForm={isOpenForm}>
        <Form
          closeModalForm={closeModalForm}
          setShowAllDrivers={setShowAllDrivers}
        ></Form>
      </Modal>
    </div>
  );
};

export default Home;
