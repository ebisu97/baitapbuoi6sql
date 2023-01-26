const { DataTypes } = require("sequelize");
const sequelize = require('./index');

const Like = sequelize.define(
    'Like',
    {
        user_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: "user_id",
        },
        res_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: "res_id",
        },
        date_like:{
            type:DataTypes.DATE,
            field: 'date_like',
            allowNull:false,
        }
    },
    {
        tableName: 'like_res',
        timestamps: false,
    }
)

module.exports = Like;