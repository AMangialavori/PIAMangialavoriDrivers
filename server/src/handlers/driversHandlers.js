const allDriversController = require("../controllers/allDriverscontroller");
const driverDetailController = require("../controllers/driverDetailController");
const createDriverController = require("../controllers/createDriverController");
const fifteenDriversController = require("../controllers/fifteenDriversController");

const getAllDriversHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name
      ? await fifteenDriversController(name)
      : await allDriversController();

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getdriverDetailHandler = async (req, res) => {
  const { idDriver } = req.params;
  const source = isNaN(idDriver) ? "db" : "api";
  try {
    const driverDetail = await driverDetailController(idDriver, source);
    res.status(200).json(driverDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createDriverHandler = async (req, res) => {
  const { forename, surname, description, image, nationality, dob, teams } =
    req.body;
  try {
    const newDriver = await createDriverController(
      forename,
      surname,
      description,
      image,
      nationality,
      dob,
      teams
    );

    res.status(201).send("El driver se creó exitosamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllDriversHandler,
  getdriverDetailHandler,
  createDriverHandler,
};
