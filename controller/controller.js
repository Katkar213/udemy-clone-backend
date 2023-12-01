const globaldata=require("../data/global")
const {UdemyDataBase}=require("../model/model")
const secrete_key = "ketan";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {Registerdata2 } = require("../model/model");

const postdata=async(req,res)=>{

     const postdata= await UdemyDataBase.create(globaldata);
    
  console.log(postdata)
  res.send(postdata)
console.log("data added")    
}

const getdata=async (req,res)=>{
    const gettingdata= await UdemyDataBase.find({});
    console.log(gettingdata)
    res.send(gettingdata)
  }

const alldata=(req,res)=>{
    res.send(globaldata)
   

}


// register...........

const Register = async (req,res)=>{
  const details = req.body 
 console.log(details);
  const salt = 10
  const regData = await Registerdata2.findOne({email:details.email})

  if(regData){
      return res.send({message:"User is already registered"})
  }
  const hashPassword = bcrypt.hashSync(details.password,salt) 
  const Obj={
      name:details.name,
      email:details.email,
      password:hashPassword
  }
  console.log(Obj)
  await Registerdata2.create(Obj) 

  // const token = jwt.sign({userEmail:details.email},secretKey)

  return res.send({message:"User is successfully Registered"})
}



// login......
// login......

const Login =async (req,res)=>{
  const logData = req.body
  const logDb = await Registerdata2.find({})
  
  const LogDetails = logDb.find(item=>{

      if(logData.email === item.email)
      {
        
          return item
      }

  })

    console.log(LogDetails)
  if(LogDetails){
      const encrypt = bcrypt.compareSync(logData.password,LogDetails.password)
      if(encrypt){
          const token = jwt.sign({userEmail:logData.email},secrete_key,{expiresIn:"7d"})
          console.log({message:"User is successfully Login",name:LogDetails.name,token:token});
          return res.send({message:"User is successfully Login",name:LogDetails.name,token:token})
      }
      else{
          return res.send({message:" Password is wrong"})
      }
  }
  else{
      return res.send({message:"Enter valid Email email"})
  }
}


module.exports={alldata,getdata,postdata,Login,Register};