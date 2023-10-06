import Card from "../card/Card";
// import { useSelector } from "react-redux";
import style from "./cardContainer.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";

const CardContainer = ({ drivers }) => {
  // const drivers = useSelector((state) => state.drivers);

  const [page, setPage] = useState(1);

  const [perPage, setPerPage] = useState(9);

  const maximumPages = Math.ceil(drivers.length / perPage);

  return (
    <div className={style.cardList}>
      {drivers
        .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((driver) => {
          return (
            <Card
              key={driver.id}
              id={driver.id}
              name={`${driver.forename} ${driver.surname}`}
              dob={driver.dob}
              image={driver.image}
              teams={`Escudería: ${driver.teams}`}
            ></Card>
          );
        })}
      <Pagination page={page} setPage={setPage} maximumPages={maximumPages} />
    </div>
  );
};

export default CardContainer;
