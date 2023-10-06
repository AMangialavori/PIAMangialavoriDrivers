const axios = require("axios");
const { Team, Driver } = require("../db");
const path = require("path");

const URL = "http://localhost:5000/drivers";

const defaultImage = path.join(__dirname, "../assets/logof1.png");

const driverDetailController = async (idDriver, source) => {
  if (source === "db") {
    const detailDriverDB = await Driver.findByPk(idDriver, {
      include: {
        model: Team,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    const driverDetailsDB = {
      id: detailDriverDB.id,
      forename: detailDriverDB.forename,
      surname: detailDriverDB.surname,
      dob: detailDriverDB.dob,
      description: detailDriverDB.description,
      nationality: detailDriverDB.nationality,
      image: detailDriverDB.image || defaultImage,
      teams: detailDriverDB.Teams.map((team) => team.name).join(", "),
    };
    return driverDetailsDB;
  } else {
    const response = await axios(`${URL}/${idDriver}`);
    const detailDriverApi = response.data;
    return {
      id: detailDriverApi.id,
      forename: detailDriverApi.name?.forename,
      surname: detailDriverApi.name?.surname,
      dob: detailDriverApi.dob,
      description: detailDriverApi.description,
      nationality: detailDriverApi.nationality,
      image: detailDriverApi.image?.url || defaultImage,
      teams: detailDriverApi.teams,
    };
  }
};

module.exports = driverDetailController;
