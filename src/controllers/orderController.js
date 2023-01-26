const sequelize = require('../models/index');
const { response } = require("../helper/response");
const initModels = require('../models/init-models');
const model = initModels(sequelize);


const orderItem = async (req, res) => {
    try {
        let { user_id, food_id, amount, code, arr_sub_id } = req.body
        let result = await model.order.create({
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id
        })
        res.status(200).json(response(result,"Order Success"));
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = orderItem;
