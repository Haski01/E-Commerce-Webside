const { Brand } = require("../models/indexSchema");

let allBrands = [
  { image: "../img/brand/1.png" },
  { image: "../img/brand/2.png" },
  { image: "../img/brand/3.png" },
  { image: "../img/brand/4.png" },
  { image: "../img/brand/5.png" },
  { image: "../img/brand/6.png" },
];

module.exports.brandDatainitDB = async () => {
  await Brand.deleteMany({});
  await Brand.insertMany(allBrands);
  console.log("BRAND Data initialise successfull");
};

// initDB();
