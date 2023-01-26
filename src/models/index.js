const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_food','root','1234',
{
    host: "localhost",
    port: "3306",
    dialect: "mysql" // hệ csdl đang sử dụng
}
)

// try{
//     sequelize.authenticate();
//     console.log("kết nối dữ liệu thành công")
// } catch {
//     console.log("kết nối thất bại")
// }

module.exports = sequelize;