const axios = require("axios");
// const path = require("path");
const { Team, Driver } = require("../db");

const URL = "http://localhost:5000/drivers";

// const defaultImage = path.join(__dirname, "../assets/logof1.png");

const defaultImage =
  "https://1000marcas.net/wp-content/uploads/2020/01/logo-F1.png";

const allDriversController = async () => {
  const response = await axios(`${URL}`);
  const allDriversFromApi = response.data;

  const mapDriversFromApi = allDriversFromApi.map((apiDriver) => ({
    id: apiDriver.id,
    forename: apiDriver.name?.forename,
    surname: apiDriver.name?.surname,
    description: apiDriver.description,
    nationality: apiDriver.nationality,
    dob: apiDriver.dob,
    image: apiDriver.image?.url || defaultImage,
    teams: apiDriver.teams,
    created: "false",
  }));
  const allDriversFromDB = await Driver.findAll({
    include: { model: Team, attributes: ["name"], through: { attributes: [] } },
  }); // solo muestra nombre/s de escuderia/s

  if (!allDriversFromApi)
    throw new Error("Error de busqueda en la Api de todos los corredores");
  if (!allDriversFromDB)
    throw new Error("Error de busqueda en la BD de todos los corredores");

  const mapDriversFromDB = allDriversFromDB.map((dbDriver) => ({
    id: dbDriver.id,
    forename: dbDriver.forename,
    surname: dbDriver.surname,
    description: dbDriver.description,
    nationality: dbDriver.nationality,
    dob: dbDriver.dob,
    image: dbDriver.image,
    teams: dbDriver.Teams.map((team) => team.name).join(", "),
    created: "true",
  }));

  const allDrivers = [...mapDriversFromDB, ...mapDriversFromApi];

  return allDrivers;
};

module.exports = allDriversController;

// Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.
// IMPORTANTE: Si un driver no tiene imagen, deberás colocarle una por defecto
// {
//   include: [Team];
// }
