const express=require("express");
const connection=require("./config/db")
const app=express();
const cors=require("cors");
const routes=require("./routes/routes")
app.use(cors())
app.use("/api",routes)
app.listen(4001, async ()=>{
    await connection();
    console.log("server runs fine")
})