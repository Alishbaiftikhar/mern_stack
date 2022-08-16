const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const bodyParser = require('body-parser');
// const multer=require('multer') 
// const upload=multer({dest: 'uploads/'});
const asyncHandler= require('express-async-handler')
const Brand=require('../model/brandModel')
const registerBrand=asyncHandler(async (req,res)=>{
     console.log(req.file);
     const brandImage=req.file.path;
     const{brandName,brandEmail,brandContactnumber,brandAddress,password,subscriptionplan}=req.body
     if(!brandName||!brandEmail|| !brandContactnumber || !brandAddress|| !brandEmail ||!password ||!subscriptionplan){
          res.status(400)
          throw new Error('Please add all fields')
     }
     //check if user exist
     const userExists= await Brand.findOne({brandEmail})
     if (userExists){
          res.status(400)
          throw new Error('user already exist')
     }
     //hash password
     const salt=await bcrypt.genSalt(10)
     const hashedPassword=await bcrypt.hash(password,salt)
     //create user
     const user=await Brand.create({
          brandName,brandEmail,brandContactnumber,brandAddress,subscriptionplan,brandImg:brandImage,  
     password: hashedPassword
          
     })
     if(user){
          res.status(201).json({
               _id: user.id,
               name: user.brandName,
               email: user.brandEmail,
               city:user.city,
               token: generateToken(user._id)
          })
     }
     else{
          res.status(400)
          throw new Error('invalid user data')
     }
     
     // res.json({message: 'Register user'})
  
})
const loginBrand=asyncHandler(async(req,res)=>{
     const{brandEmail,password}=req.body
     const user=await Brand.findOne({brandEmail})
     if(user && (await bcrypt.compare(password,user.password))){
          res.json({
               _id: user.id,
               name: user.brandName,
               email: user.brandEmail,
               token: generateToken(user._id)
          })
     }
     else{
          res.status(400)
          throw new Error('invalid credentials')
     }
     res.json({message: 'Login user'})
  
})
const getBrand=asyncHandler(async(req,res)=>{
     const {_id,brandName,brandEmail}=await Brand.findById(req.params.bid)
     console.log(_id,brandName);
     res.status(200).json({
          id: _id,
          brandName,brandEmail
     })

})

const generateToken=(id)=>{
     return jwt.sign({id},process.env.JWT_SECRET,{
          expiresIn:'30d',
     })
}
module.exports={
     registerBrand,
     loginBrand,
     getBrand
}
