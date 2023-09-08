const express = require("express");
const getCategories = require("../controllers/categoryController");

const categoryRouter = express.Router();

categoryRouter.route("/categories").get(getCategories);

module.exports = categoryRouter;
