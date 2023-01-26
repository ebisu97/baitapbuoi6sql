const express = require('express');
const orderItem = require('../controllers/orderController');
const orderRoute = express.Router();

orderRoute.post("",orderItem);

module.exports = orderRoute;