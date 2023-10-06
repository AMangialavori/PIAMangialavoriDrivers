const { Router } = require("express");
const {
  getAllDriversHandler,
  getdriverDetailHandler,
  createDriverHandler,
} = require("../handlers/driversHandlers");

const {
  validateCreateDriver,
  validateGetdriverDetail,
} = require("../middlewares/validations");

const driversRouter = Router();

driversRouter.get("/", getAllDriversHandler);

driversRouter.get(
  "/detail/:idDriver",
  validateGetdriverDetail,
  getdriverDetailHandler
);

driversRouter.post("/", validateCreateDriver, createDriverHandler);

module.exports = driversRouter;
