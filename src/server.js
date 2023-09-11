const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const categoryRouter = require("./routes/category");
const setupBrowser = require("./middleware/setupBrowser");
const companiesRouter = require("./routes/companies");

app.use(express.json());
app.use(cors());

// gloabal browser is used to reduce request time
// however this makes it statefull, to make stateless remove globalbrowser implementation
let globalBrowser;

app.use(setupBrowser);

app.use(categoryRouter);
app.use(companiesRouter);

app.listen(6200, () => {
  console.log(`Listening on port 6200`);
});

module.exports = { globalBrowser };
