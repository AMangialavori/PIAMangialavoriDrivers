const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

// server.use(express.static("assets"));
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/formula1", router);

module.exports = server;
