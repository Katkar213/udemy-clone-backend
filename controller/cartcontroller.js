const { Cart ,LearningData} = require("../model/cartmodel");
const {UdemyDataBase}=require("../model/model")

// exports.fetchCartByUser = async (req, res) => {
//   try {
//     console.log("req.body", req.body);
//     const cartItems = await Cart.find({ userid: req.body.userId })
//     res.status(200).json(cartItems);
//   } catch (error) {
//     res.status(400).json(err);
//   }
// };

addToCart = async (req, res) => {
//   const {id } = req.user;
const data=req.body
  console.log("req.body", data);
const cartdata= await Cart.create(data);
// console.log(cartdata)
res.send(cartdata)
  // const cart = new Cart({...req.body});
  // try {
  //   const doc = await cart.save();
  //   res.status(201).json(doc);
  // } catch (err) {
  //   // Handle errors here
  //   res.status(400).json(err);
  // }
};

getCartData=async(req,res)=>{
  const cartdata= await Cart.find({});
  res.send(cartdata);
}

removecartitem=async(req,res)=>{
  const data=req.body
const remove=await Cart.findOneAndDelete({id:data.id})
console.log("item removed",remove)
res.send("item data removed")
}





const pushlearning=async(req,res)=>{
  const data=req.body;
 const learnings= await LearningData.create(data);
  res.send(learnings)
}
const getlearning=async(req,res)=>{
  const received= await LearningData.find({})
  res.send(received)
}


const deleteCart = async(req,res)=>{
  const deletecart = await Cart.deleteMany({})
  res.send(deletecart);
}

const search = async (req, res) => {
  const {category} = req.query;

  const queryObj = {};

  if (category) {
    queryObj.category = { $regex: category, $options: "i" };
  }

  try {
    const searchedData = await UdemyDataBase.find(queryObj);
    res.send(searchedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports={addToCart,getCartData,removecartitem,getlearning, pushlearning,deleteCart,search}


//   exports.Learning3=async(req,res)=>{
           
//     const cardDelete= await Cart.deleteMany({})
//     res.send(cardDelete)
// }