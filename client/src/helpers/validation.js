const validation = (state) => {
  const errors = {};

  if (state.forename.length < 3) {
    errors.forename = "El nombre debe tener mas de 3 carácteres";
  }
  if (state.forename.length > 30) {
    errors.forename = "El nombre debe tener entre menos de 15 carácteres";
  }
  if (!/^[a-zA-Z\s]+$/.test(state.forename)) {
    errors.forename = "El nombre debe contener solo caracteres alfabéticos";
  }

  if (state.surname.length < 3) {
    errors.surname = "El apellido debe tener mas de 3 carácteres";
  }
  if (state.surname.length > 30) {
    errors.surname = "El apellido debe tener entre menos de 15 carácteres";
  }
  if (!/^[a-zA-Z\s]+$/.test(state.surname)) {
    errors.surname = "El apellido debe contener solo caracteres alfabeticos";
  }

  if (state.nationality.length < 5) {
    errors.nationality = "La nacionalidad debe tener mas de 5 carácteres";
  }
  if (state.nationality.length > 15) {
    errors.nationality = "La nacionalidad debe tener menos de 15 carácteres";
  }
  if (!/^[A-Za-z]+$/.test(state.nationality)) {
    errors.nationality =
      "La nacionalidad debe contener solo carácteres alfabéticos";
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(state.dob)) {
    errors.dob = "El formato de la fecha debe ser aaaa-mm-dd";
  }

  if (!/^(http|https):\/\/[^ "]+$/.test(state.image)) {
    errors.image = "El formato de la imagen debe ser una URL";
  }
  if (state.description.length < 5) {
    errors.description =
      "La longitud de la descripción debe tener mas de 5 carácteres";
  }
  if (state.description.length > 3000) {
    errors.description =
      "La longitud de la descripción debe tener menos de 500 palabras";
  }
  if (!/^[a-zA-Z ]+(,[a-zA-Z ]+)*$/.test(state.teams)) {
    errors.teams =
      "La escudería debe contener solo carácteres alfabéticos y separados por ','";
  }
  return errors;
};
export default validation;
