const routes=require("express").Router()
const {alldata}=require("../controller/controller")

routes.get("/alldata",alldata)
// routes.post("/postdata",postdata)
// routes.get("/getdata",getdata)

module.exports=routes;