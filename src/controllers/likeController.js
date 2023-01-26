const likeService = require("../services/likeservice");

const getLikes = () => {
    return async (req, res) => {
        try {
            const {user_id, res_id} = req.params;
            const likes = await likeService.getLikes(user_id, res_id);
            res.status(200).json({ data: likes });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

const createLike = () => {
    return async (req, res) => { 
        try {
            const like = req.body;
            const createLike = await likeService.createLike(like);
            res.status(200).json({ data: createLike});
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
     };
};

const updateLike = () => {
    return async (req, res) => {
        try {
            const {user_id, res_id} = req.params;
            const like = req.body
            const updateLike = await likeService.updateLike(like, user_id, res_id);
            res.status(200).json({ data: updateLike });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

const deleteLike  = () => {
    return async (req, res) =>{
        try {
           const {user_id, res_id} = req.params;
           const deleteLike = await likeService.deleteLike(user_id, res_id);
           res.status(200).json({data: true});
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }
}

module.exports = {
    getLikes,
    createLike,
    updateLike,
    deleteLike,
}