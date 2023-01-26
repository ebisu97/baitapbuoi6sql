const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const model = initModels(sequelize);
const { response } = require("../helper/response");

const rateResIfNotCreate = async (req, res) => {
    try {
        let { res_id, user_id, amount } = req.body;
        let date_rate = Date.now();

        let checkRate = await model.rate_res.findOne({
            where: {
                user_id,
                res_id
            }
        });

        if (checkRate) {
            let result = model.rate_res.update({
                amount
            }, {
                where: {
                    user_id,
                    res_id,
                }
            })
            res.status(200).json(response(result,"Update Rate Success"));
        } else {
            let result = await model.rate_res.create({
                user_id,
                res_id,
                amount,
                date_rate
            })

            res.status(200).json(response(result,"Create Rate Success"));
        }

    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getRateRes = async (req, res) => {

    try {
        let data = await model.restaurant.findAll(
            {
                include: ["rate_res"]
            }
        )
        res.status(200).json(response(data));
    } catch (error) {
        next(error)
    }
}

const getRateByUserID = async (req, res) => {
    const {user_id} = req.params;
    try {
        let data = await model.user.findAll(
            {
                include: ["rate_res"],
                where: {
                    user_id
                }
            }
        )
        res.status(200).json(response(data,"Get Rate by User ID Success"))
    } catch (error) {
        next(error)
    }
}
const getRateByResID = async (req, res) => {
    const {res_id} = req.params;
    try {
        let data = await model.restaurant.findAll(
            {
                include: ["rate_res"],
                where: {
                    res_id
                }
            }
        )
        res.status(200).json(response(data,"Get Rate by Restaurant ID Success"))
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getRateRes,
    rateResIfNotCreate,
    getRateByUserID,
    getRateByResID
}