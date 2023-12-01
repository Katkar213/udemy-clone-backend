const mongoose=require("mongoose");
const cloudurl="mongodb+srv://ketankatkar213:033970@cluster0.ath1q4e.mongodb.net/UdemyBase?retryWrites=true&w=majority"

const connection=async ()=>{
    try{
      await mongoose.connect(cloudurl)
    }
    catch(err){
        console.log(err)
    }
  
}

module.exports=connection