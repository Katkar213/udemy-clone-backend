const globaldata=require("../data/global")
const {UdemyDataBase}=require("../model/model")

const postdata=async (req,res)=>{
  const posteddata= await UdemyDataBase.create(globaldata);
  console.log(posteddata)
  res.send(posteddata)
}

const getdata=async (req,res)=>{
    const gettingdata= await UdemyDataBase.find({});
    console.log(gettingdata)
    res.send(gettingdata)
  }
const alldata=(req,res)=>{
    res.send(globaldata)
   

}


module.exports={alldata,postdata,getdata};