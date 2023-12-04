const express=require("express");
const connection=require("./config/db")
const app=express();
const stripe=require("stripe")("sk_test_51OFIp6SASTZsWUYjISFzbmjyRk74mtxrqIwa5y4DfmpVSRsSLHc7rnobjakNC5sR9eiRkNQSzkKxHHIx3GJwFPaq00xK5aMQvZ")

const router=require("./routes/cartroutes")
const cors=require("cors");
const routes=require("./routes/routes")

app.use(express.json())
app.use(cors())
app.use("/api",routes)
app.use("/api",router)

  
  app.post("/checkout",async(req,res)=>{
    const {products}=req.body;
    console.log(products)
    const lineItems =products.map((product)=>({
      price_data:{
          currency:"inr",
          product_data:{
              
              name:product.imagetitle,
  
          },
          unit_amount:product.latestprice * 100
      },
      quantity:product.quantity ||1
     }))
  
     const session =await stripe.checkout.sessions.create({
      payment_method_types:["card"],
       line_items:lineItems,
      mode:"payment",
      success_url:"http://lacalhost:4001/",
      cancel_url:"http://lacalhost:4001/",
  
  
  })
  res.json({id:session.id})
  
  })






app.listen(4001, async()=>{
    await connection();
    console.log("server runs fine")
})