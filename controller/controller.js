const globaldata=require("../data/global")


const alldata=(req,res)=>{
res.send(globaldata);
}


module.exports={alldata};