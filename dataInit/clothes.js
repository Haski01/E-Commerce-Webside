const { Cloth } = require("../models/indexSchema");

let allClothes = [
  {
    image: "../img/clothes/1.jpg",
    name: "Lilac Grace Set suit",
    price: 22.99,
  },
  {
    image: "../img/clothes/2.jpg",
    name: "Twirlberry Charm Dress",
    price: 15.99,
  },
  { image: "../img/clothes/3.jpg", name: "Sunshine Pop Tee", price: 7.99 },
  { image: "../img/clothes/4.jpg", name: "Summer chill", price: 20.99 },
];

module.exports.clothesDataInitDb = async () => {
  await Cloth.deleteMany({});
  await Cloth.insertMany(allClothes);
  console.log("CLOTHES Data initialise successfull");
};

// initDB();
