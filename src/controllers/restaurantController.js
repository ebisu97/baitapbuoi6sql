const { response } = require("../helper/response");
const restaurantService = require("../services/restaurantservice");
const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const model = initModels(sequelize);

const getRestaurant = () => {
    return async (req, res, next) => {
        try {
            const restaurants = await restaurantService.getResInfo();
            res.status(200).json(response(restaurants));
        } catch (error) {
            next(error);
        }
    }
}

const getLikeByRestaurantID = async (req, res) => {
    const {res_id}= req.params;
    try {
        let data = await model.restaurant.findAll(
            {
                include: ["like_res"],
                where:{
                    res_id
                }
            }
        )
        res.status(200).json(response(data))
    } catch (error) {
        next(error);
    }
};

const getLikeUserByID = async (req, res) => {
    const {user_id}= req.params;
    try {
        let data = await model.user.findAll(
            {
                include: ["like_res"],
                where:{
                    user_id
                }
            }
        )
        res.status(200).json(response(data))
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getLikeUserByID,
    getRestaurant,
    getLikeByRestaurantID,
}