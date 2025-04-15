const { homeDataInitDB } = require("./dataInit/home");
const { brandDatainitDB } = require("./dataInit/brand");
const { newProductDataInitDb } = require("./dataInit/new");
const { productDataInitDb } = require("./dataInit/product");
const { clothesDataInitDb } = require("./dataInit/clothes");
const { watchesDataInitDb } = require("./dataInit/watches");
const { shoesDataInitDB } = require("./dataInit/shoes");
const { shopProductInitDB } = require("./dataInit/shop");
const {blogDataInitDb} = require("./dataInit/blog");

const initData = async () => {
  try {
    await homeDataInitDB();
    await brandDatainitDB();
    await newProductDataInitDb();
    await productDataInitDb();
    await clothesDataInitDb();
    await watchesDataInitDb();
    await shoesDataInitDB();
    await shopProductInitDB();
    await blogDataInitDb();
  } catch (error) {
    console.log(error);
  }
};

initData();
