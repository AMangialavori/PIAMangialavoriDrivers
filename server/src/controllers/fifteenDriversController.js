const axios = require("axios");
const path = require("path");
const { Team, Driver } = require("../db");
const { Op } = require("sequelize");

const URL = "http://localhost:5000/drivers";

const defaultImage = path.join(__dirname, "../assets/logof1.png");

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

  // if (dbDrivers.length) return dbDrivers;

  const response = await axios(`${URL}`);
  const apiDrivers = response.data;
  const filteredApiDrivers = apiDrivers.filter(
    (driver) => driver.name?.forename.toLowerCase() === name.toLowerCase()
    // driver.name?.forename.toLowerCase().includes(name.toLowerCase())
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
