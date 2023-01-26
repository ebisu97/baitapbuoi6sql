const { SysError } = require("../helper/error");
const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const model = initModels(sequelize);

const getResInfo = async () => {
    try {
        const restaurants = await model.restaurant.findAll({
            include: [
                {
                    association: "user_id_users",
                    attributes: {
                        exclude: ["email", "password"],
                    },
                    through: {
                        attributes: []
                    },
                },
                {
                    association: "user_id_user_rate_res",
                    attributes: {
                        exclude: ["email", "password"],
                    },
                    through: {
                        attributes: []
                    },
                },
            ]
        });
        return restaurants;
    } catch (error) {
        throw error;
    }
}

const likeResInfo = async (user_id, res_id) => {
    try {
        const res = await model.restaurant.findByPk(res_id);
        if (!res) {
            throw SysError(400, "restaurant not found");
        }

        const user = await model.user.findByPk(user_id);
        if (!user) {
            throw SysError(400, "user not found");
        }
        const hasLiked = await model.restaurant.hasUserLike(user.user_id);
        if (hasLiked) {
            await model.restaurant.removeUserLike(user.user_id);
        }
        else {
            await model.restaurant.addUserLike(user.user_id);
        }

    } catch (error) {
        throw error;
    }
};

const rateResInfo = async (rate, res_id) => {
    try {
        const res = await model.restaurant.findByPk(res_id);
        if (!res) {
            throw SysError(400, "restaurant not found");
        }

        const user = await model.user.findByPk(rate.user_id);
        if (!user) {
            throw SysError(400, "user not found");
        }

        console.log(res.__proto__);
        const hasRate = await model.restaurant.hasUserRate(user.user_id);
        if (hasRate) {
            await model.restaurant.setUserRates(user.user_id, {through: { amount: rate.amount }});
        }
        else {
            console.log(hasRate);
            await model.restaurant.addUserRate(user.user_id, {through: { amount: rate.amount }});
        }

    } catch (error) {
        throw error;
    }
};

module.exports = {
    getResInfo,
    likeResInfo,
    rateResInfo,
};