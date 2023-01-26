const { where } = require('sequelize');
const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const model = initModels(sequelize);

const getUser = async (req,res) => {
    try {
    let data = await model.user.findAll({ });
    res.status(200).send(data);
    } catch (err) {
        res.status(500).send("Lỗi BackEnd")
    }
}

const getUserId = async (req, res) => {
    try {
    let { id } = req.params;
    let dataOne = await model.user.findOne({
        where: {
            user_id : id,
        }
    });
    if (dataOne)
    res.status(200).send(dataOne);
    else 
    res.status(400).send("User không tồn tại")
    } catch (err) {
    res.status(500).send("Lỗi Back End")
    }
}

const createUser = async (req, res) => {
    let { user_id , full_name, email, pass_word } = req.body;

    let modeluser = {
        full_name,
        pass_word,
        email
    }

    let data = await model.user.create(modeluser);
    console.log(data)
    res.send("Create User")
}

module.exports = {
    getUser,
    createUser,
    getUserId
}