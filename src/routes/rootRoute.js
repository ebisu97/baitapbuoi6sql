const express = require('express');
const userRoute = require('./userRoute');
const rootRoute = express.Router();
const foodRoute = require('./foodRoute');
const likeRoute = require('./likeRoute');
const restaurantRoute = require('./restaurantRoute');
const rateRoute = require('./rateRoute');
const orderRoute = require('./orderRoute');

// sử dụng middleware của express
rootRoute.use("/user", userRoute);
rootRoute.use("/like", likeRoute)
rootRoute.use("/res",restaurantRoute);
rootRoute.use("/rate",rateRoute);
rootRoute.use("/order",orderRoute);


module.exports = rootRoute;