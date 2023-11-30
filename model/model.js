const mongoose=require("mongoose")

const userRegister =mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
});


const userSchema = mongoose.Schema({
    id:String,
    category:String,
    Title:String,
    subtitle:String,
    image:String,
    imageTitle:String,
    imagetitle:String,
    field:String,
    ratings:String,
    latestprice:Number,
    oldprice:String,
    quantity:Number,
    description:String,
    Rating:String,
    titalhours:String,
    lectures:String
  });

const UdemyDataBase=mongoose.model("UdemyData",userSchema)
const Registerdata2=mongoose.model("Registerationdata", userRegister)
module.exports={UdemyDataBase,Registerdata2}










