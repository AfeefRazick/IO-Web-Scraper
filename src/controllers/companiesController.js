const puppeteer = require("puppeteer");
const { writeFileSync } = require("fs");
const { convertArrayToCSV } = require("convert-array-to-csv");
// const converter = require('convert-array-to-csv');

const companiesByCategory = async (req, res) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // go to the category/subcategory link provided within the EDB site
  const categoryLink = req?.body?.link;
  await page.goto(categoryLink);
  page.setDefaultNavigationTimeout(0);

  let companies = [];

  let hasNextPage = true;

  // click the next button once companies are grabbed from a page
  // until next button is disabled
  while (hasNextPage) {
    await page.waitForSelector(".xList .xList-items");

    // return all companies from a page
    const pageCompanies = await page.evaluate(() => {
      const companyList = document.querySelector(".xList .xList-items");

      const listItems = Array.from(companyList.querySelectorAll("li"));

      const companies = listItems.map((element) => {
        const name = element.querySelector(
          ".content-wrapper h4.capitalize"
        ).innerHTML;

        const subCategories =
          element.querySelector(".content-wrapper p").innerHTML;

        const profilePath = element
          .querySelector(".cat-links-wrapper .link-as-button.button-five")
          .getAttribute("href");

        const profileLink = `https://www.srilankabusiness.com${profilePath}`;

        return { name, subCategories, profileLink };
      });

      return companies;
    });

    companies.push(...pageCompanies);

    let isDisabled;

    await page
      .waitForSelector(".exporterList-pagination > .next", {
        visible: true,
        timeout: 3000,
      })
      .then(async () => {
        isDisabled = await page.evaluate(() => {
          return document.querySelector(
            ".exporterList-pagination > .next.disabled"
          );
        });
        hasNextPage = !isDisabled;
      })
      .catch(() => {
        hasNextPage = false;
      });

    if (hasNextPage) {
      await page.click(".exporterList-pagination > .next a");
    }
  }

  let companyList = [];
  // for each company, go to itsEDB company profile page, get phonenumber and other details
  for (const company of companies) {
    await page.goto(company.profileLink);

    const otherInfo = await page.evaluate(() => {
      const generalContactHeading = document.querySelector(
        ".general-contact-heading"
      );

      const phoneNumbers =
        generalContactHeading.nextElementSibling.nextElementSibling.innerText;

      const websiteLink = document
        .querySelector(".list-style-none.seller-socil-media")
        .previousElementSibling.querySelector("a").innerHTML;

      return { phoneNumbers, websiteLink };
    });
    companyList.push({ ...company, ...otherInfo });
  }

  // changing data format to be more usefull

  companyList = companyList.map((company) => {
    const phoneNumbers = company.phoneNumbers
      .replace("Telephone", "")
      .replace("\n", "")
      .replace(",", "")
      .split("(94) ");

    phoneNumbers.shift();

    const websiteLink =
      company.websiteLink !== "Inquire Now" ? company.websiteLink : "";

    return {
      ...company,
      subCategories: company.subCategories.split(","),
      phoneNumbers,
      websiteLink,
    };
  });

  console.log(companyList);
  res.json(companyList);

  await browser.close();

  // formatting arrays to strings to csv formatting style
  const companyStringArray = companyList.map((company) => {
    return {
      ...company,
      profileLink: null,
      subCategories: company.subCategories.toString(),
      phoneNumbers: company.phoneNumbers.toString(),
    };
  });

  const csvFromArrayOfObjects = convertArrayToCSV(companyStringArray);
  writeFileSync("./files/it-companies.csv", csvFromArrayOfObjects);
};

module.exports = companiesByCategory;
