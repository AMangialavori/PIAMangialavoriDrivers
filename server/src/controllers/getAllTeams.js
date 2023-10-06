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

  const uniqueTeams = Array.from(teamsSet);

  // Guardar los equipos en la base de datos
  for (const teamName of uniqueTeams) {
    await Team.findOrCreate({
      where: { name: teamName },
    });
  }
  return uniqueTeams;
};

module.exports = getAllTeams;

// const getTeamsfromDrivers = allTeamsFromApi.map((driver) => driver.teams);

// const nameTeams = getTeamsfromDrivers.map((teamsString) => {
//   if (typeof teamsString === "string") {
//     return teamsString.split(", ");
//   } else if (Array.isArray(teamsString)) {
//     return teamsString.join(", ").split(", ");
//   }
// });

// // getTeamsfromDrivers.forEach(async (team) => {
// //   const allTeamsDB = await Team.findOrCreate({
// //     where: { name: team },
// //   });
// //   return allTeamsDB;
// // });
// return nameTeams;
