const getAllTeams = require("../controllers/getAllTeams");
const allTeamsFromDB = require("../controllers/allTeamsFromDB");

const getTeamsHandler = async (req, res) => {
  try {
    const allTeams = await getAllTeams();
    res.status(200).json(allTeams);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTeamsFromDBHandler = async (req, res) => {
  try {
    const allTeamsDB = await allTeamsFromDB();
    res.status(200).json(allTeamsDB);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTeamsHandler, getTeamsFromDBHandler };
