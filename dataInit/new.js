const { New } = require("../models/indexSchema");

let allNew = [
  { image: "../img/new/1.jpg", title: "Extreme Rear Sneakers" },
  { image: "../img/new/2.jpg", title: "Awesom black outfit" },
  { image: "../img/new/3.jpg", title: "Sportwear upto 50% off" },
];

module.exports.newProductDataInitDb = async () => {
  await New.deleteMany({});
  await New.insertMany(allNew);
  console.log("NERPRODUCT Data initialise successfull");
};

// initDB();
