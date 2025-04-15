const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");

const {
  Home,
  Brand,
  New,
  Product,
  Cloth,
  Watch,
  Shoe,
  Shop,
  Blog,
} = require("./models/indexSchema");

const Cart = require("./models/cartSchema");
const CartProduct = require("./models/productSchema");

app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// home route
app.get("/", (req, res) => {
  res.redirect("./error.ejs");
});

// index route
app.get(
  "/loome",
  wrapAsync(async (req, res) => {
    let home = await Home.find();
    let brands = await Brand.find();
    let newProducts = await New.find();
    let products = await Product.find();
    let clothes = await Cloth.find();
    let watches = await Watch.find();
    let shoes = await Shoe.find();
    res.render("./index.ejs", {
      home,
      brands,
      newProducts,
      products,
      clothes,
      watches,
      shoes,
    });
  })
);

// shop route
app.get(
  "/loome/shop",
  wrapAsync(async (req, res) => {
    let shopProducts = await Shop.find();
    res.render("./shop.ejs", { shopProducts });
  })
);

// show route (view product in detail)
app.post(
  "/loome/product/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let productDetail = await Shop.findById(id);

    // for our to suggest related product
    let products = await Product.find();
    res.render("./show.ejs", { productDetail, products });
  })
);

// blog page (render blog page)
app.get(
  "/loome/blog",
  wrapAsync(async (req, res) => {
    let blogs = await Blog.find();
    res.render("./blog.ejs", { blogs });
  })
);

// product add-to-cart route
app.post(
  "/loome/add-to-cart/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let { image, name, price } = await Shop.findById(id);

    let cartProduct = new CartProduct({
      name: name,
      price: price,
      image: image,
    });

    cartProduct.save();

    // Check if the product is already in cart
    let item = await Cart.findOne({ product: id });

    if (item) {
      // If already in cart, increase quantity
      item.quantity += 1;
      await item.save();
    } else {
      // Else, create new cart item
      const newCartItem = new Cart({ product: cartProduct._id });
      await newCartItem.save();
      // console.log(newCartItem);
    }

    res.redirect("/loome/shop");
  })
);

// cart page
app.get(
  "/loome/cart",
  wrapAsync(async (req, res) => {
    try {
      const cartItems = await Cart.find().populate("product");
      res.render("./cart.ejs", { cartItems });
    } catch (err) {
      res.status(500).render("/loome");
    }
  })
);

// delete cart product from cart
app.delete("/loome/cart/:id/delete", async (req, res) => {
  let { id } = req.params;
  let deletedCartProduct = await Cart.findOneAndDelete(id);
  await Cart.findByIdAndDelete(deletedCartProduct.product);
  res.redirect("/loome/cart");
});

// -------------------HANDLING ERRORS------------

//FOR NOT EXISTING ROUTE
app.use("*", (req, res, next) => {
  throw new ExpressError(404, "---Page not found---");
  // res.send("something went worng");
});

// error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).render("./error.ejs", { err });
});

// server listening on port 8000
app.listen(8000, () => {
  console.log("Listening at port: 8000");
});
