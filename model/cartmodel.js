const mongoose = require("mongoose");
// const { Schema } = mongoose;
// const {Registerdata2} = require("../controller/controller");

const cartSchema = mongoose.Schema({
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
})

const learningSchema = mongoose.Schema({
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
const LearningData=mongoose.model("LearningData",learningSchema)
const Cart = mongoose.model("Cart", cartSchema);

module.exports={Cart,LearningData}


