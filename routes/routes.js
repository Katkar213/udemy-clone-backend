const routes=require("express").Router()
const {alldata}=require("../controller/controller")

routes.get("/alldata",alldata)
module.exports=routes;