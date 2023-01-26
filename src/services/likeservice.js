const Like = require('../models/Like');

const getLikes = async (user_id, res_id) => {
    try {
        const likes = await Like.findAll({
            where: {
                user_id: user_id,
                res_id: res_id,
            }
        });
        return likes;
    } catch (error) {
        throw error;
    }
}

const createLike = async (data) => {
    try {
        const like = await Like.findOne({
            where: {
                user_id: data.user_id,
                res_id: data.res_id,
            }
        });
        if (like) {
            throw new Error("Like is existed");
        }
        const createLike = await Like.create(data);
        return createLike;

    } catch (error) {
        throw error;
    }
}

const updateLike = async(data, user_id, res_id) => {
    try {
        const valid = await Like.findOne({
            where:{
                user_id: user_id,
                res_id: res_id,
            }
        });
        if (!valid) {
            throw new Error("Order not found");
        }
        await Like.update(data, {
            where:{
                user_id: user_id,
                res_id: res_id,
            }
        })

        const like = await Like.findOne({
            where:{
                user_id: user_id,
                res_id: res_id,
            }
        });

        return like;

    } catch (error) {
        throw error;
    }
}

const deleteLike = async (user_id, res_id) => {
    try {
        const like = await Like.findOne({
            where: {
                user_id: user_id,
                res_id: res_id,
            }
        });
        if (!like) {
            throw new Error("like not found");
        }
        await Like.destroy({
            where: {
                user_id: user_id,
                res_id: res_id,
            }
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getLikes,
    createLike,
    updateLike,
    deleteLike,
}