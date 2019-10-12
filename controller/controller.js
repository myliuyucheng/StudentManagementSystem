const db = require('../models/db.js');


// 展示首页
exports.showIndex = function(req,res){
    res.render("index")
}
// 查询全体学生
exports.showStudents = function(req,res){
    console.log("请求中")
    db.getAllStudent((results)=>{
        res.json(results)
        res.end()
    })
}

// 添加页面
exports.showAdd = function(req,res){
    res.render("showAdd")
}
// 添加学生
exports.addStudent = function(req,res){
    console.log("正在添加学生")
    db.addStudent(req.query.name,req.query,(results)=>{
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end(results)
    })
}

//查询页面
exports.showCheck = function(req,res){
    res.render("showCheck")
}
//查询学生
exports.checkStudent = function(req,res){
    db.checkStudent(req.body.name,(results)=>{
        res.json(results)
        res.end()
    })
}


// 删除页面
exports.showRemove = function(req,res){
    res.render("showRemove")
}
// 删除学生
exports.removeStudent = function(req,res){
    db.removeStudent(req.body.name,(results)=>{
        res.end(results)
    })
}


// 更改页面
exports.showUpdate = function(req,res){
    res.render("showUpdate")
}
// 更改学生
exports.updateStudent = function(req,res){
    db.updateStudent(req.body.name,req.body,(results)=>{
        res.end(results)
    })
}