import CardContainer from "../../components/cardContainer/CardContainer";
import NavBar from "../../components/navBar/NavBar";

import {
  getDrivers,
  searchByName,
  filteredTeams,
  filteredOrigin,
  alphabeticOrder,
  driversDobOrder,
} from "../../redux/actions/actions";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const [teamSelector, setTeamSelector] = useState("");
  const [originselector, setOriginSelector] = useState("");
  const [abcOrder, setAbcOrder] = useState("");
  const [dobOrder, setDobOrder] = useState("");
  const [showAllDrivers, setShowAllDrivers] = useState(false);

  const drivers = useSelector((state) => state.drivers);

  useEffect(() => {
    if (!showAllDrivers) {
      dispatch(getDrivers());
    }
  }, [showAllDrivers]);

  // useEffect(() => {
  //   dispatch(getDrivers());
  // }, []);

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

  return (
    <div>
      <div>
        <NavBar
          setSearchName={setSearchName}
          setTeamSelector={setTeamSelector}
          setOriginSelector={setOriginSelector}
          setAbcOrder={setAbcOrder}
          setDobOrder={setDobOrder}
          setShowAllDrivers={setShowAllDrivers}
          showAllDrivers={showAllDrivers}
        ></NavBar>
      </div>
      <CardContainer drivers={drivers}></CardContainer>
    </div>
  );
};

export default Home;
