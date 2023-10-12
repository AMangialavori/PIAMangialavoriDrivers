import style from "./card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ id, name, dob, image, teams, created, onDelete }) => {
  const onClickHandler = () => {
    onDelete();
  };

  return (
    <div className={style.cardContainer}>
      <div>
        <NavLink to={`/detail/${id}`}>
          <h2>{name}</h2>
        </NavLink>
        <img className={style.characterImage} src={image} alt="" />
        <h3>{dob}</h3>
        <h3>{teams}</h3>
      </div>
      <div>
        {created === "true" && (
          <button onClick={onClickHandler}>Eliminar</button>
        )}
      </div>
    </div>
  );
};

export default Card;
