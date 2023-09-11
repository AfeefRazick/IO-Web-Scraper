const server = require("../server");

const getCategories = async (req, res) => {
  let page = server.page;
  await page.goto("https://www.srilankabusiness.com/exporters-directory/");

  const productsServices = await page.evaluate(() => {
    const menuList = Array.from(document.querySelectorAll("nav.menu ul"));

    const categories = menuList.map((ul) => {
      const links = Array.from(ul.querySelectorAll("li a"));
      return links.map((link) => {
        return {
          category: link.innerText,
          link: `https://www.srilankabusiness.com${link.getAttribute("href")}`,
        };
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
