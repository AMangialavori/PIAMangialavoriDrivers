const { Router } = require("express");
const getTeamsHandler = require("../handlers/teamshandler");
const teamsRouter = Router();

teamsRouter.get("/", getTeamsHandler);

module.exports = teamsRouter;
