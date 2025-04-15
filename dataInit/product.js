const { Product } = require("../models/indexSchema");

let allProducts = [
  {
    image: "../img/products/1.jpg",
    name: "SkyDrift Vibe Sneakers",
    price: 3299,
  },
  {
    image: "../img/products/2.jpg",
    name: "Urban Pulse Sneakers",
    price: 4000,
  },
  { image: "../img/products/3.jpg", name: "TrailTrek Pro Bag", price: 2199 },
  { image: "../img/products/4.jpg", name: "WhisperWrap Scalf", price: 899 },
];

module.exports.productDataInitDb = async () => {
  await Product.deleteMany({});
  await Product.insertMany(allProducts);
  console.log("PRODUCTS Data initialise successfull");
};

// initDB();
