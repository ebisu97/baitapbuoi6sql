const express = require("express");
const { getLikeByRestaurantID, getLikeUserByID, getRestaurant } = require("../controllers/restaurantController");

const restaurantRoute = express.Router();

restaurantRoute.get("", getRestaurant());
restaurantRoute.get("/getLikeResByID/:res_id", getLikeByRestaurantID);
restaurantRoute.get("/getLikeUserByID/:user_id", getLikeUserByID)


module.exports = restaurantRoute;