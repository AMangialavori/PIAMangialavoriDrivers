import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions/actions";
import { cleanDetail } from "../../redux/actions/actions";
import style from "./detail.module.css";

const Detail = () => {
  const driverDetail = useSelector((state) => state.driver_detail);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const onClickHandler = () => {
    dispatch(cleanDetail());
    navigate("/home");
  };

  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);

  return (
    <div className={style.mainContainer}>
      <div className={style.detailContainer}>
        <div>
          <button onClick={onClickHandler}>X</button>
        </div>
        <div className={style.atributes}>
          <h2>Id | {driverDetail?.id}</h2>
          <h2>Nombre | {driverDetail?.forename}</h2>
          <h2>Apellido | {driverDetail?.surname}</h2>
          <h2>Nacionalidad | {driverDetail?.nationality}</h2>
          <h2>Fecha de nacimiento | {driverDetail?.dob}</h2>
          <h2>Escudería |{driverDetail?.teams}</h2>
          <p>Descripción | {driverDetail?.description}</p>
        </div>
        <div>
          <img
            className={style.characterImage}
            src={driverDetail?.image}
            alt={driverDetail?.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
