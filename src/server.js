const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const categoryRouter = require("./routes/category");
// const setupBrowser = require("./middleware/setupBrowser");
const companiesRouter = require("./routes/companies");

app.use(express.json());
app.use(cors());

// gloabal browser is used to reduce request time
// however this makes it statefull, to make stateless remove globalbrowser implementation
// let globalBrowser;

// app.use(setupBrowser);

app.use(categoryRouter);
app.use(companiesRouter);

app.listen(6200, () => {
  console.log(`Listening on port 6200`);
});

// module.exports = { globalBrowser };

// const companyList = [
//   {
//     name: "AQUATTA SHIPPING PVT LTD",
//     subCategories: [
//       "Fresh Provisions",
//       "Deck",
//       "Engine and Cabin Stores",
//       "Bonded Stores",
//       "Gases",
//       "Nautical Publications",
//       "Flags and BA Charts",
//       "Medicine and Stationery",
//       "Anti Piracy and Safety Items.",
//     ],
//     profileLink:
//       "https://www.srilankabusiness.com/exporters-directory/company-profiles/aquatta-shipping-pvt-ltd/",
//     phoneNumbers: ["112 340116 ", "112 340117, ", "112 330888"],
//     websiteLink: "http://aquattashipping.com",
//   },
//   {
//     name: "CEYLON TOBACCO COMPANY PLC",
//     subCategories: [
//       "Cigarettes",
//       "Manufactured Tobacco",
//       "Unmanufactured Tobacco",
//     ],
//     profileLink:
//       "https://www.srilankabusiness.com/exporters-directory/company-profiles/ceylon-tobacco-company-plc/",
//     phoneNumbers: ["11-2466713 ", "11-2439651 ", "11-2496200"],
//     websiteLink: "http://www.bat.com",
//   },
//   {
//     name: "KINGS FOODS PVT LTD",
//     subCategories: [
//       "All varieties of Rice",
//       "Curry Powder",
//       "Curd Chilies",
//       "Coconut Milk Powder",
//       "Noodles",
//       "Thosai Mixture",
//       "Hopper Mixture",
//       "Soft Drink",
//       "Biscuits",
//       "Coconut Oil",
//       "Sesame Oil",
//       "Sauces",
//       "Pickles",
//       "Tea",
//       "Soya Nuggets",
//       "Dry Fish",
//       "Liquor",
//       "Beer",
//       "Soap &amp; Kitchen Utensils etc",
//     ],
//     profileLink:
//       "https://www.srilankabusiness.com/exporters-directory/company-profiles/kings-foods-pvt-ltd/",
//     phoneNumbers: ["11-2580321 ", "11-2582392 ", "11-2508378"],
//     websiteLink: "",
//   },
//   {
//     name: "SEATRANS INTERNATIONAL PVT LTD",
//     subCategories: ["Ship Supplies", "Bonded Warehousing", "Duty Free Shop"],
//     profileLink:
//       "https://www.srilankabusiness.com/exporters-directory/company-profiles/seatrans-international-pvt-ltd/",
//     phoneNumbers: ["11-2445197 ", "11-2330790/2 ", "11-2395185"],
//     websiteLink: "http://www.seatransinternational.com",
//   },
//   {
//     name: "UNITED TOBACCO PROCESSING PVT LTD",
//     subCategories: ["Ciggaretts", "Tobacco Cuts"],
//     profileLink:
//       "https://www.srilankabusiness.com/exporters-directory/company-profiles/united-tobacco-processing-pvt-ltd/",
//     phoneNumbers: ["11-2252628 ", "11-2253298 ", "11-2256515"],
//     websiteLink: "",
//   },
// ];
// const { writeFileSync } = require("fs");
// const { convertArrayToCSV } = require("convert-array-to-csv");

// const companyStringArray = companyList.map((company) => {
//   return {
//     ...company,
//     subCategories: company.subCategories.toString(),
//     phoneNumbers: company.phoneNumbers.toString(),
//   };
// });

// const csvFromArrayOfObjects = convertArrayToCSV(companyStringArray);
// writeFileSync("./it-companies.csv", csvFromArrayOfObjects);
