const express = require("express");
const error = require("../middleware/error");
const transit = require("../routes/transit");

// eslint-disable-next-line func-names
module.exports = function(app) {
  app.use(express.json());
  app.use("/api/transit", transit);
  app.use(error);
};
