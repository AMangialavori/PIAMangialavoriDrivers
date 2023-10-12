import { useState } from "react";
import axios from "axios";
import validation from "../../helpers/validation";
import style from "./form.module.css";

const Form = ({ closeModalForm, setShowAllDrivers }) => {
  const onClickCloseModalHandler = () => {
    closeModalForm();
    setShowAllDrivers(false);
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

  const resetForm = () => {
    setDriverCreated({
      forename: "",
      surname: "",
      dob: "",
      nationality: "",
      description: "",
      image: "",
      teams: "",
    });
    setErrors({
      forename: "Ejemplo: Ana",
      surname: "Ejemplo: Mangialavori",
      dob: "aaaa-mm-dd",
      nationality: "Ejemplo: Italiana",
      description: "Un texto menos a 255 carácteres",
      image: "Debe ser una URL",
      teams: "Ejemplo: Ferrari",
    });
  };

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
      .then((res) => alert("Creado exitosamente"))
      .catch((err) => alert(err.response.data.error));
    resetForm();
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
    <div className={style.container}>
      <div className={style.formContainer}>
        <form onSubmit={submitHandler}>
          <div className={style.inputContainer}>
            <label htmlFor="forename">Nombre:</label>
            <input
              name="forename"
              type="text"
              value={driverCreated.forename}
              onChange={changeHandler}
            />
            {errors.forename && (
              <p style={{ color: "red" }}>{errors.forename}</p>
            )}
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="surname">Apellido:</label>
            <input
              name="surname"
              type="text"
              value={driverCreated.surname}
              onChange={changeHandler}
            />
            {errors.surname && <p style={{ color: "red" }}>{errors.surname}</p>}
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="dob">Fecha de nacimiento:</label>
            <input
              name="dob"
              type="text"
              value={driverCreated.dob}
              onChange={changeHandler}
            />
            {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
          </div>
          <div className={style.inputContainer}>
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
          <div className={style.inputContainer}>
            <label
              htmlFor="description"
              style={{ display: "block", textAlign: "center" }}
            >
              Descripción:
            </label>
            <textarea
              name="description"
              type="text"
              value={driverCreated.description}
              onChange={changeHandler}
              rows={4}
              cols={60}
              style={{ resize: "vertical" }}
            />
            {errors.description && (
              <p style={{ color: "red" }}>{errors.description}</p>
            )}
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="image">Imagen:</label>
            <input
              name="image"
              type="text"
              value={driverCreated.image}
              onChange={changeHandler}
            />
            {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
          </div>
          <div className={style.inputContainer}>
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
          </div>
        </form>
        <button
          className={style.closeButton}
          onClick={onClickCloseModalHandler}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Form;
