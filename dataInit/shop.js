const { Shop } = require("../models/indexSchema");

let allShopProducts = [
  {
    image: "../img/shop/1.jpg",
    name: "Sunset Vibe Tee",
    price: 19.99,
    description:
      "Soft and breathable cotton t-shirt with a summer-ready print.",
  },
  {
    image: "../img/shop/2.jpg",
    name: "FlexRun Sneakers",
    price: 59.99,
    description: "Comfortable and durable running shoes for daily workouts.",
  },
  {
    image: "../img/shop/3.jpg",
    name: "Urban Explorer Bag",
    price: 34.99,
    description: "Stylish and spacious backpack for city travels and work.",
  },
  {
    image: "../img/shop/4.jpg",
    name: "BoltKick Sneakers",
    price: 64.99,
    description: "High-performance sneakers with a bold, urban design.",
  },
  {
    image: "../img/shop/5.jpg",
    name: "Winter Whisper Scarf",
    price: 14.99,
    description: "Cozy knitted scarf with a soft-touch feel for chilly days.",
  },
  {
    image: "../img/shop/6.jpg",
    name: "FrostEdge Coat",
    price: 89.99,
    description:
      "Warm, stylish winter coat with a sleek finish and inner lining.",
  },
  {
    image: "../img/shop/7.jpg",
    name: "ShadowRidge Jacket",
    price: 74.99,
    description: "Weather-ready jacket for both casual and outdoor wear.",
  },
  {
    image: "../img/shop/8.jpg",
    name: "Metro Side Bag",
    price: 22.99,
    description: "Compact and trendy side bag for your daily essentials.",
  },
  {
    image: "../img/shop/9.jpg",
    name: "ChromeTick Watch",
    price: 49.99,
    description: "Minimal analog watch with a polished steel finish.",
  },
  {
    image: "../img/shop/10.jpg",
    name: "StreetSnap Hat",
    price: 16.99,
    description: "Cool and casual cap with adjustable fit and bold logo.",
  },
];

module.exports.shopProductInitDB = async () => {
  try {
    await Shop.deleteMany({});
    await Shop.insertMany(allShopProducts);
    console.log("SHOP Data initialise successfull");
  } catch (error) {
    console.log(error);
  }
};

// initDB();
