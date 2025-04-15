const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartProductSchema = new Schema({
  name: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("CartProduct", cartProductSchema);
