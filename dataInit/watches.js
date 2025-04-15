const { Watch } = require("../models/indexSchema");

let allWatches = [
  {
    image: "../img/watches/1.jpg",
    name: "ChronoMist Edge",
    price: 89.99,
  },
  {
    image: "../img/watches/2.jpg",
    name: "MoonGlow Classic",
    price: 74.99,
  },
  { image: "../img/watches/3.jpg", name: "BoltWave Sport", price: 59.99 },
  { image: "../img/watches/4.jpg", name: "AuraLoop Luxe ", price: 129.99 },
];

module.exports.watchesDataInitDb = async () => {
  await Watch.deleteMany({});
  await Watch.insertMany(allWatches);
  console.log("WATCHES Data initialise successfull");
};

// initDB();
