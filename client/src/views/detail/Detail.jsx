import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetail } from "../../redux/actions/actions";
import { cleanDetail } from "../../redux/actions/actions";
import style from "./detail.module.css";

const Detail = () => {
  const driverDetail = useSelector((state) => state.driver_detail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));

    return dispatch(cleanDetail());
  }, [id]);

  return (
    <div className={style.detailContainer}>
      <div className={style.atributes}>
        <h1>Esto es Detail</h1>
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
  );
};

export default Detail;
