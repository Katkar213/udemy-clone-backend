const routes=require("express").Router()
const {alldata,postdata,getdata,Register,Login}=require("../controller/controller")

routes.get("/alldata",alldata)
routes.post("/postdata",postdata)
routes.post("/register",Register)
routes.post("/login",Login)
routes.get("/getdata",getdata)

module.exports=routes;