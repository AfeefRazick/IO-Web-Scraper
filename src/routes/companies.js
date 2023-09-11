const express = require("express");
const companiesByCategory = require("../controllers/companiesController");

const companiesRouter = express.Router();

companiesRouter.route("/companies").post(companiesByCategory);

module.exports = companiesRouter;
