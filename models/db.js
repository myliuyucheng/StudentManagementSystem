const mongoose = require("mongoose");

// 连接数据库
mongoose.connect("mongodb://localhost:27017/student",{useNewUrlParser:true},
(err)=>{
    if(err){       
        console.log("数据库连接失败")
        return;
    }
    console.log("数据库连接成功")

    // 创建一个schema
    let studentSchema = new mongoose.Schema({
        name:String,
        sex:{
            type:String,
            default:"男"
        },
        chinese:Number,
        mathematics:Number,
        english:Number
    })

    // 给集合加载上schema
    let Student = mongoose.model("students",studentSchema)

    // new Student({
    //     name:"刘钰城",
    //     sex:"女",
    //     chinese:99,
    //     mathematics:99,
    //     english:99
    // }).save(()=>{
    //     console.log("数据写入成功")
    // })

    // 查询全体学生
    exports.getAllStudent = function(callback){
        Student.find().then((results)=>{
            callback(results)
            console.log("查询成功")
        })
    }

    // 添加学生
    exports.addStudent = function(name,somebody,callback){
        console.log(somebody)
        Student.findOne({name}).save().then((result)=>{
            console.log(result)
            if(!result){
                new Student(somebody).save().then(()=>{
                    callback("添加成功")
                });
            }else{
                callback("不能添加重复的学生")
            }
        })
    }


    //查询学生
    exports.checkStudent = function(name,callback){
        Student.find({name}).then((results)=>{
            callback(results)
        })
    }


    // 删除学生
    exports.removeStudent = function(name,callback){
        Student.deleteOne({name}).then((result)=>{
            if(result.deletedCount){
                callback("删除成功")
            }else{
                callback("没有这个学生,无法删除")
            }
        })
    }


    // 更改学生
    exports.updateStudent = function(name,somebody,callback){
        Student.findOne({name}).then((result)=>{
            if(result){
                Student.updateMany({name},{$set:somebody}).then((result)=>{
                   callback("更改成功") 
                })
            }else{
                callback("没有此学生")
            }
        })
    }
})