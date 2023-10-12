import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

import style from "./cardContainer.module.css";

import { useState } from "react";

const CardContainer = ({ drivers, handleDeleteDriver }) => {
  const [page, setPage] = useState(1); //currentePage

  const [perPage, setPerPage] = useState(9);

  const maximumPages = Math.ceil(drivers.length / perPage);

  return (
    <div className={style.cardList}>
      {drivers
        .slice((page - 1) * perPage, (page - 1) * perPage + perPage) // indice inicial:(2 - 1) * 9 = 9 // indice final:(2 - 1) * 9 + 9 = 18
        .map((driver) => {
          return (
            <Card
              key={driver.id}
              id={driver.id}
              name={`${driver.forename} ${driver.surname}`}
              dob={driver.dob}
              image={driver.image}
              teams={`Escudería: ${driver.teams}`}
              created={driver.created}
              onDelete={() => handleDeleteDriver(driver.id)}
            ></Card>
          );
        })}
      <Pagination page={page} setPage={setPage} maximumPages={maximumPages} />
    </div>
  );
};

export default CardContainer;
