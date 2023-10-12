const axios = require("axios");
const { Team } = require("../db");

const URL = "http://localhost:5000/drivers";

const getAllTeams = async () => {
  const response = await axios(`${URL}`);
  const driversFromApi = response.data;

  const teamsSet = new Set(); // Utilizar un conjunto para almacenar nombres únicos de equipos

  driversFromApi.forEach((driver) => {
    if (driver.teams && typeof driver.teams === "string") {
      const driverTeams = driver.teams.split(",").map((team) => team.trim());
      driverTeams.forEach((teamName) => {
        teamsSet.add(teamName);
      });
    }
  });

  const uniqueTeams = Array.from(teamsSet); //obtengo un []

  // Guardar los equipos en la base de datos
  for (const teamName of uniqueTeams) {
    await Team.findOrCreate({
      where: { name: teamName },
    });
  }
  return uniqueTeams;
};

module.exports = getAllTeams;
