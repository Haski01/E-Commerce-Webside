const mongoose = require("mongoose");
const { Schema } = mongoose;
const { shopSchme } = require("./shopSchema");
const { blogSchme } = require("./blogSchema");

main()
  .then(console.log("connection successfull with mongodb"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/loome");
}

// home schema
const homeSchema = new Schema({
  title: String,
  subtitle: String,
  description: String,
  image: String,
});

// brand schema
const brandSchema = new Schema({
  image: String,
});

// new product
const newSchema = new Schema({
  image: String,
  title: String,
});

const productSchema = new Schema({
  image: String,
  name: String,
  price: Number,
});

const clothSchema = new Schema({
  image: String,
  name: String,
  price: Number,
});

const watchSchema = new Schema({
  image: String,
  name: String,
  price: Number,
});

const shoeSchema = new Schema({
  image: String,
  name: String,
  price: Number,
});

const Home = mongoose.model("Home", homeSchema);
const Brand = mongoose.model("Brand", brandSchema);
const New = mongoose.model("New", newSchema);
const Product = mongoose.model("Product", productSchema);
const Cloth = mongoose.model("Cloth", clothSchema);
const Watch = mongoose.model("Watch", watchSchema);
const Shoe = mongoose.model("Shoe", shoeSchema);
const Shop = mongoose.model("Shop", shopSchme);
const Blog = mongoose.model("Blog", blogSchme);

module.exports = { Home, Brand, New, Product, Cloth, Watch, Shoe, Shop, Blog };
