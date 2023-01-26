const express = require('express');
const { getLikes, deleteLike, createLike, updateLike } = require("../controllers/likeController");
const likeRoute = express.Router();

likeRoute.get("/:user_id&:res_id", getLikes());
likeRoute.post("", createLike());
likeRoute.put("/:user_id&:res_id", updateLike());
likeRoute.delete("/:user_id&:res_id",deleteLike());

module.exports = likeRoute;