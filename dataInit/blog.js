const { Blog } = require("../models/indexSchema");

let allBlogs = [
  {
    image: "../img/blog/1.jpg",
    title: "Urban Edge – Streetwear that Speaks Confidence",
  },
  {
    image: "../img/blog/2.jpg",
    title: "Men’s Fashion in Leather – Bold Looks for the Modern Man",
  },
  {
    image: "../img/blog/3.jpg",
    title: "Parisian Street Chic – Where Elegance Meets Effortless Cool",
  },
  {
    image: "../img/blog/4.jpg",
    title: "Grace Like Audrey – Classic Looks That Never Fade",
  },
  {
    image: "../img/blog/5.jpg",
    title: "Power Dressing for Women – Own the Room with Style",
  },
  {
    image: "../img/blog/6.jpg",
    title: "Boho Vibes – Embrace Freedom with Flowy Fashion",
  },
];

module.exports.blogDataInitDb = async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(allBlogs);
  console.log("NERPRODUCT Data initialise successfull");
};

// const initDb = async () => {
//   await Blog.deleteMany({});
//   await Blog.insertMany(allBlogs);
//   console.log("NERPRODUCT Data initialise successfull");
// };

// initDb();
