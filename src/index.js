//npm start
// yarn add express
// yarn add nodemon

// yarn add cors

//commonjs module => import thư viện express
const express = require('express');

// gán lại hàm cho một biến mới
const app = express();
// cho phép server backend đọc được chuỗi json
// middleware
app.use(express.json());


//cấp phép cho front end truy cập server API BE
const cors = require('cors');
app.use(cors());

app.listen(8080);

const rootRoute = require('./routes/rootRoute');

// khởi tạo server bằng Express
// port: địa chỉ định danh server

app.use("/api",rootRoute)

// app.get("/demo/:id",(req,res) => {
//     let {id, hoTen, tuoi} = req.body
// })

