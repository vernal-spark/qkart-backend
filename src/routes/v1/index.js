const express = require("express");
const userRoute = require("./user.route");


// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Reroute all API requests beginning with the `/v1/users` route to Express router in user.route.js
const authRoute = require("./auth.route");
const productRoute = require("./product.route");
const cartRoute=require("./cart.route")
const router = express.Router();

router.use("/users",userRoute)
// TODO: CRIO_TASK_MODULE_AUTH - Reroute all API requests beginning with the `/v1/auth` route to Express router in auth.route.js 
router.use("/products", productRoute);
router.use("/cart",cartRoute)
router.use("/auth",authRoute)

module.exports = router
