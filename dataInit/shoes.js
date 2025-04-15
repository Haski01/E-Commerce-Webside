const { Shoe } = require("../models/indexSchema");

let allShoes = [
  {
    image: "../img/shoes/1.jpg",
    name: "StormStride X",
    price: 69.99,
  },
  {
    image: "../img/shoes/2.jpg",
    name: "ComfaStep Lite",
    price: 49.99,
  },
  { image: "../img/shoes/3.jpg", name: "FlexRun Vortex", price: 59.99 },
  { image: "../img/shoes/4.jpg", name: "TerraTrek Max", price: 89.99 },
];

module.exports.shoesDataInitDB = async () => {
  await Shoe.deleteMany({});
  await Shoe.insertMany(allShoes);
  console.log("SHOES Data initialise successfull");
};

// initDB();
