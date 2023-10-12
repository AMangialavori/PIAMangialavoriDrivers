const axios = require("axios");

const { Team, Driver } = require("../db");
const { Op } = require("sequelize");

const URL = "http://localhost:5000/drivers";

const defaultImage =
  "https://1000marcas.net/wp-content/uploads/2020/01/logo-F1.png";

const fifteenDriversController = async (name) => {
  const dbDrivers = await Driver.findAll({
    where: {
      forename: {
        [Op.iLike]: `%${name}%`,
      },
    },
    limit: 15,
    include: { model: Team, attributes: ["name"], through: { attributes: [] } },
  });

  if (dbDrivers.length) {
    return dbDrivers.map((dbDriver) => ({
      id: dbDriver.id,
      forename: dbDriver.forename,
      surname: dbDriver.surname,
      description: dbDriver.description,
      nationality: dbDriver.nationality,
      dob: dbDriver.dob,
      image: dbDriver.image,
      teams: dbDriver.Teams.map((team) => team.name).join(", "),
    }));
  }

  const response = await axios(`${URL}`);
  const apiDrivers = response.data;
  const filteredApiDrivers = apiDrivers.filter(
    (driver) => driver.name?.forename.toLowerCase() === name.toLowerCase()
  );

  const fifteenApiDrivers = filteredApiDrivers.slice(0, 15).map((driver) => ({
    id: driver.id,
    forename: driver.name?.forename,
    surname: driver.name?.surname,
    description: driver.description,
    nationality: driver.nationality,
    dob: driver.dob,
    image: driver.image?.url || defaultImage,
    teams: driver.teams,
  }));

  if (!fifteenApiDrivers.length)
    throw new Error(`No existen drivers con el nombre: ${name}`);

  return fifteenApiDrivers;
};

module.exports = fifteenDriversController;
