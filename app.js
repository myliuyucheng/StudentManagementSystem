const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routes/routes.js")
const app = express()

// 设置模板引擎
app.set("view engine","pug")
// 挂载解析post模块
app.use(bodyParser.urlencoded({
    extended:false
}))
// 挂载静态资源
app.use(express.static("public"))

app.use(routers);
app.get("/addStudents",(req,res)=>{
    console.log(res.body)
    res.end()
})
app.listen(3000,()=>{
    console.log("端口3000监听成功")
})