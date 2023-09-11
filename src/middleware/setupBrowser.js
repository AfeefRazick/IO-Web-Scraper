const puppeteer = require("puppeteer");
const server = require("../server");

const setupBrowser = async (req, res, next) => {
  if (!server.globalBrowser) {
    server.globalBrowser = await puppeteer.launch({ headless: false });
    server.page = await server.globalBrowser.newPage();
  }
  next();
};

module.exports = setupBrowser;
