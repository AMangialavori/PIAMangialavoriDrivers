import style from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, dob, image, teams }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <img className={style.characterImage} src={image} alt="" />
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h2>{dob}</h2>
        <h2>{teams}</h2>
      </div>
    </div>
  );
};

export default Card;
