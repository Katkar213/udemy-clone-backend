const express=require("express");

const app=express();
const cors=require("cors");
const routes=require("./routes/routes")
app.use(cors())
app.use("/api",routes)
app.listen(4001,()=>{
    console.log("server runs fine")
})