const { Driver, Team } = require("../db");
const { Op } = require("sequelize");

const createDriverController = async (
  forename,
  surname,
  description,
  image,
  nationality,
  dob,
  teams
) => {
  // Verificar que se proporcionen equipos

  if (!teams) {
    throw new Error("Debes proporcionar al menos un equipo");
  }

  // Dividir los nombres de los equipos como una cadena separada por comas: ["Ferrari", " Mercedes", " Red Bull"]
  const teamNames = teams.split(",").map((teamName) => teamName.trim());

  const [createdDriver, create] = await Driver.findOrCreate({
    where: {
      forename,
      surname,
      description,
      image,
      nationality,
      dob,
    },
  });
  const associatedTeams = [];
  // Buscar los equipos en la base de datos por nombre o crearlos si no existen
  for (const teamName of teamNames) {
    const [associatedTeam, created] = await Team.findOrCreate({
      where: {
        name: {
          [Op.iLike]: teamName,
        },
      },
      defaults: { name: teamName },
    });

    // Asociar los equipos al Driver recién creado
    await createdDriver.addTeams(associatedTeam);

    associatedTeams.push(teamName);

    createdDriver.dataValues.teams = associatedTeams.join(", ");
  }

  if (!create) throw new Error("El driver ya existe");
  return createdDriver;
};

module.exports = createDriverController;
