const express = require("express");
const getCompanies = require("../controllers/companiesController");

const companiesRouter = express.Router();

companiesRouter.route("/companies").get(getCompanies);

module.exports = companiesRouter;
