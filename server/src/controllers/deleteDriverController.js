const { Team, Driver } = require("../db");

const deleteDriverController = async (id) => {
  const deleteDriver = await Driver.destroy({ where: { id } });

  if (!deleteDriver) throw new Error("Error removing driver");

  return "Driver removed";
};

module.exports = deleteDriverController;
