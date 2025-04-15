const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports.blogSchme = new Schema({
  image: String,
  title: String
});
