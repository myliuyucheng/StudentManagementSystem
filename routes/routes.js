const express = require("express");
const controller = require("../controller/controller.js")


const router = express.Router()


router.get("/",controller.showIndex)
router.post("/",controller.showStudents)

router.get("/addStudent",controller.showAdd)
router.get("/addStudents",controller.addStudent)


router.get("/checkStudent",controller.showCheck)
router.post("/checkStudent",controller.checkStudent)


router.get("/removeStudent",controller.showRemove)
router.post("/removeStudent",controller.removeStudent)


router.get("/updateStudent",controller.showUpdate)
router.post("/updateStudent",controller.updateStudent)


module.exports = router