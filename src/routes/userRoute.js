const express = require('express');
const userRoute = express.Router();


const {getUser, createUser, getUserId} = require('../controllers/userController')
userRoute.get("/getUser", getUser)
userRoute.get("/getUserId/:id",getUserId)
userRoute.post("/createUser", createUser)

// userRoute.put("/updateUser",(req,res)=> {})

module.exports = userRoute;