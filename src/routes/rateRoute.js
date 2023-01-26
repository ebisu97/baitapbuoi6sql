const express = require("express");
const { rateResIfNotCreate, getRateRes,getRateByUserID, getRateByResID} = require("../controllers/rateController");

const rateRoute = express.Router();

rateRoute.post("/rateCheck", rateResIfNotCreate);
rateRoute.get("/getRate", getRateRes);
rateRoute.get("/getRateByUserID/:user_id", getRateByUserID);
rateRoute.get("/getRateByResID/:res_id", getRateByResID);

module.exports = rateRoute;