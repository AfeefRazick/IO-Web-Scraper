const products = [
  {
    category: "Apparel & Textiles ",
    link: "https://www.srilankabusiness.com/exporters-directory/apparel-exporters-in-sri-lanka/",
  },
  {
    category: "Ayurvedic & Herbal Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/ayurvedic-herbal/",
  },
  {
    category: "Boat and Ship Building ",
    link: "https://www.srilankabusiness.com/exporters-directory/boat-ship-building-exporters-in-sri-lanka/",
  },
  {
    category: "Ceramics & Porcelain Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/ceramics-porcelain-products-manufacturers/",
  },
  {
    category: "Chemicals & Plastic Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/chemicals-and-plastic-products-exporters/",
  },
  {
    category: "Coconut & Coconut based Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/coconut-product-exporters-in-sri-lanka/",
  },
  {
    category: "Cut Flowers & Foliage ",
    link: "https://www.srilankabusiness.com/exporters-directory/floriculture-exporters-in-sri-lanka/",
  },
  {
    category: "Diamonds, Gems & Jewellery ",
    link: "https://www.srilankabusiness.com/exporters-directory/gem-diamond-and-jewellery-exporters-in-sri-lanka/",
  },
  {
    category: "Electrical and Electronic Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/electrical-electronic-products-exporters-in-sri-lanka/",
  },
  {
    category: "Engineering Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/engineering-products-exporters-in-sri-lanka/",
  },
  {
    category: "Fish & Fisheries Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/fish-fisheries-product-exporters-in-sri-lanka/",
  },
  {
    category: "Food, Feed & Beverages ",
    link: "https://www.srilankabusiness.com/exporters-directory/food-and-beverages-exporters-in-sri-lanka/",
  },
  {
    category: "Footwear and Parts ",
    link: "https://www.srilankabusiness.com/exporters-directory/footwear-parts-exporters-in-sri-lanka/",
  },
  {
    category: "Fruits, Nuts and Vegetables ",
    link: "https://www.srilankabusiness.com/exporters-directory/fruits-nuts-vegetables-exporters-in-sri-lanka/",
  },
  {
    category: "Giftware & Toys ",
    link: "https://www.srilankabusiness.com/exporters-directory/giftware-and-toys-exporters-in-sri-lanka/",
  },
  {
    category: "Leather Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/leather-products-exporters-in-sri-lanka/",
  },
  {
    category: "Light Engineering Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/light-engineering-services-sri-lanka/",
  },
  {
    category: "Non-metallic Mineral Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/non-metallic-mineral-products-exporters-in-sri-lanka/",
  },
  {
    category: "Organic Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/organic-products-exporters-in-sri-lanka/",
  },
  {
    category: "Ornamental Fish ",
    link: "https://www.srilankabusiness.com/exporters-directory/aquarium-fish/",
  },
  {
    category: "Other Export Crops ",
    link: "https://www.srilankabusiness.com/exporters-directory/other-export-crops-exporters-in-sri-lanka/",
  },
  {
    category: "Other Manufactured Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/other-products-exporters-in-sri-lanka/",
  },
  {
    category: "Personal Protective Equipment ",
    link: "https://www.srilankabusiness.com/exporters-directory/ppe/",
  },
  {
    category: "Printing, Prepress and Packaging ",
    link: "https://www.srilankabusiness.com/exporters-directory/printing-and-stationery-exporters-in-sri-lanka/",
  },
  {
    category: "Rubber & Rubber Based Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/rubber-exporters-in-sri-lanka/",
  },
  {
    category: "Spices, Essential Oils & Oleoresins ",
    link: "https://www.srilankabusiness.com/exporters-directory/spices-exporters-in-sri-lanka/",
  },
  {
    category: "Tea ",
    link: "https://www.srilankabusiness.com/exporters-directory/tea-exporters-in-sri-lanka/",
  },
  {
    category: "Tobacco ",
    link: "https://www.srilankabusiness.com/exporters-directory/tobacco-exporters-in-sri-lanka/",
  },
  {
    category: "Wood & Wooden Products ",
    link: "https://www.srilankabusiness.com/exporters-directory/wooden-product-exporters-in-sri-lanka/",
  },
];
const services = [
  {
    category: "BPM ",
    link: "https://www.srilankabusiness.com/exporters-directory/bpm-outsourcing-service-exporters-in-sri-lanka/",
  },
  {
    category: "Construction Services ",
    link: "https://www.srilankabusiness.com/exporters-directory/construction-service-exporters-in-sri-lanka/",
  },
  {
    category: "Educational Services ",
    link: "https://www.srilankabusiness.com/exporters-directory/educational-service-exporters-in-sri-lanka/",
  },
  {
    category: "Electrical & Electronics ",
    link: "https://www.srilankabusiness.com/exporters-directory/electrical-electronic-service-exporters-in-sri-lanka/",
  },
  {
    category: "Engineering Services ",
    link: "https://www.srilankabusiness.com/exporters-directory/engineering-exporters-in-sri-lanka/",
  },
  {
    category: "Gem & Diamond Faceting ",
    link: "https://www.srilankabusiness.com/exporters-directory/diamond-gem-jewellery-service-exporters-in-sri-lanka/",
  },
  {
    category: "ICT ",
    link: "https://www.srilankabusiness.com/exporters-directory/ict-outsourcing-service-exporters-in-sri-lanka/",
  },
  {
    category: "Logistics ",
    link: "https://www.srilankabusiness.com/exporters-directory/logistics-service-exporters-in-sri-lanka/",
  },
  {
    category: "Marine & Offshore Services ",
    link: "https://www.srilankabusiness.com/exporters-directory/offshore-marine-engineering-service-providers-in-sri-lanka/",
  },
  {
    category: "Printing Prepress & Packaging ",
    link: "https://www.srilankabusiness.com/exporters-directory/printing-prepress-packaging-service-exporters-in-sri-lanka/",
  },
  {
    category: "Textile Processing Services ",
    link: "https://www.srilankabusiness.com/exporters-directory/textile-processing-service-exporters-in-sri-lanka/",
  },
  {
    category: "Wellness Tourism ",
    link: "https://www.srilankabusiness.com/exporters-directory/wellness-tourism-service-exporters-in-sri-lanka/",
  },
];
module.exports = { products, services };
