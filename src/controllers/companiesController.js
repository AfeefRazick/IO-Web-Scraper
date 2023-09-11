const server = require("../server");

const companiesByCategory = async (req, res) => {
  const page = server.page;

  const categoryLink = req?.body?.link;
  await page.goto(categoryLink);
  page.setDefaultNavigationTimeout(0);

  let companies = [];

  let hasNextPage = true;

  while (hasNextPage) {
    await page.waitForSelector(".xList .xList-items");
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

    // await page.evaluate(() => {
    //   return document
    //     .querySelector(".exporterList-pagination > .next a")
    //     .getAttribute("href");
    // });
    // console.log(link);

    // hasNextPage = !isDisabled;

    if (hasNextPage) {
      await page.click(".exporterList-pagination > .next a");
    }
  }

  // changing data format to be more usefull

  companies = companies.map((company) => {
    return { ...company, subCategories: company.subCategories.split(", ") };
  });

  const companyList = [];
  for (const company of companies) {
    // const company = companies[i]
    await page.goto(company.profileLink);
    const otherInfo = await page.evaluate(() => {
      const generalContactHeading = document.querySelector(
        ".general-contact-heading"
      );
      const phoneNumbers =
        generalContactHeading.nextSibling.nextSibling.nextSibling.textContent;
      const websiteLink = document
        .querySelector(".list-style-none.seller-socil-media")
        .previousElementSibling.querySelector("a").innerHTML;
      return { phoneNumbers, websiteLink };
    });
    companyList.push({ ...company, ...otherInfo });
  }

  console.log(companyList);
  res.json(companyList);
};

module.exports = companiesByCategory;
