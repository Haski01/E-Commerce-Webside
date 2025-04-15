const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports.shopSchme = new Schema({
  image: String,
  name: String,
  price: String,
  description: String,
});

// const Shop = mongoose.model("Shop", shopSchme);
// module.exports = Shop;
