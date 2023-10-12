const { Team } = require("../db");

const allTeamsFromDB = async () => {
  const allTeamsDB = await Team.findAll();

  if (!allTeamsDB) throw new Error("Not teams were found");
  const teamsDB = allTeamsDB.map((team) => team.name);

  return teamsDB;
};

module.exports = allTeamsFromDB;
