import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validation from "../../helpers/validation";
import style from "./form.module.css";

const Form = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/home");
  };

  const [driverCreated, setDriverCreated] = useState({
    forename: "",
    surname: "",
    dob: "",
    nationality: "",
    description: "",
    image: "",
    teams: "",
  });

  const [errors, setErrors] = useState({
    forename: "Ejemplo: Ana",
    surname: "Ejemplo: Mangialavori",
    dob: "aaaa-mm-dd",
    nationality: "Ejemplo: Italiana",
    description: "Un texto menos a 255 carácteres",
    image: "Debe ser una URL",
    teams: "Ejemplo: Ferrari",
  });

  const changeHandler = (event) => {
    setDriverCreated({
      ...driverCreated,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...driverCreated,
        [event.target.name]: event.target.value,
      })
    );
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/formula1/drivers/", driverCreated)
      .then((res) => alert("Creado exitosamente"));
    setDriverCreated({
      forename: "",
      surname: "",
      dob: "",
      nationality: "",
      description: "",
      image: "",
      teams: "",
    }).catch((err) => alert("El driver ya existe"));
  };

  function handlerDiseabled() {
    let disabled;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }

    return disabled;
  }
  return (
    <div className={style.formContainer}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="forename">Nombre:</label>
          <input
            name="forename"
            type="text"
            value={driverCreated.forename}
            onChange={changeHandler}
          />
          {errors.forename && <p style={{ color: "red" }}>{errors.forename}</p>}
        </div>
        <div>
          <label htmlFor="surname">Apellido:</label>
          <input
            name="surname"
            type="text"
            value={driverCreated.surname}
            onChange={changeHandler}
          />
          {errors.surname && <p style={{ color: "red" }}>{errors.surname}</p>}
        </div>
        <div>
          <label htmlFor="dob">Fecha de nacimiento:</label>
          <input
            name="dob"
            type="text"
            value={driverCreated.dob}
            onChange={changeHandler}
          />
          {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
        </div>
        <div>
          <label htmlFor="nationality">Nacionalidad:</label>
          <input
            name="nationality"
            type="text"
            value={driverCreated.nationality}
            onChange={changeHandler}
          />
          {errors.nationality && (
            <p style={{ color: "red" }}>{errors.nationality}</p>
          )}
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <input
            name="description"
            type="text"
            value={driverCreated.description}
            onChange={changeHandler}
          />
          {errors.description && (
            <p style={{ color: "red" }}>{errors.description}</p>
          )}
        </div>
        <div>
          <label htmlFor="image">Imagen:</label>
          <input
            name="image"
            type="text"
            value={driverCreated.image}
            onChange={changeHandler}
          />
          {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
        </div>
        <div>
          <label htmlFor="teams">Escudería/s:</label>
          <input
            name="teams"
            type="text"
            value={driverCreated.teams}
            onChange={changeHandler}
          />
          {errors.teams && <p style={{ color: "red" }}>{errors.teams}</p>}
        </div>
        <div>
          <button
            className={style.submitButton}
            type="submit"
            disabled={handlerDiseabled()}
          >
            Crear
          </button>
          <button onClick={onClickHandler}>Volver</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
