const puppeteer = require("puppeteer");
const server = require("../server");

const getCategories = async (req, res) => {
  // const browser = await puppeteer.launch({ headless: "new" });
  // const page = await server.globalBrowser.newPage();
  let page = server.page;
  await page.goto("https://www.srilankabusiness.com/exporters-directory/");

  const productsServices = await page.evaluate(() => {
    const menuList = Array.from(document.querySelectorAll("nav.menu ul"));

    const categories = menuList.map((ul) => {
      const links = Array.from(ul.querySelectorAll("li a"));
      return links.map((link) => {
        return { category: link.innerText, link: link.getAttribute("href") };
      });
    });
    return categories;
  });

  const products = productsServices[0];
  const services = productsServices[1];

  res.json({ products, services });

  // await browser.close();
};

module.exports = getCategories;
