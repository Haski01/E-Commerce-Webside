const { Home } = require("../models/indexSchema");

let home = new Home({
  title: "NEW ARRAIVALS",
  subtitle: "Best Price This Year",
  description: "Shoomatinc keeps you comfortable while you walk and exercise. ",
  image: "../img/back.jpg",
});

module.exports.homeDataInitDB = async () => {
  await Home.deleteMany({});
  await home.save();
  console.log("HOME Data initialise successfull");
};

// module.exports = initDB;
