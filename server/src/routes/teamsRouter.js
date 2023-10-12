const { Router } = require("express");
const {
  getTeamsHandler,
  getTeamsFromDBHandler,
} = require("../handlers/teamshandler");
const teamsRouter = Router();

teamsRouter.get("/", getTeamsHandler);
teamsRouter.get("/db", getTeamsFromDBHandler);

module.exports = teamsRouter;
