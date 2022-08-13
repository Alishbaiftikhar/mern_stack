const asyncHandler= require('express-async-handler')
const Goal=require('../model/goalModel')
const User=require('../model/userModal')
//@desc setgoals
//@route Post /api/goals
//@access private
const setGoal=asyncHandler (async(req,res)=>{

     if (!req.body.text){
     res.status(400)
     throw new Error('plz add text field')
     }
     const goal=await Goal.create({
          text: req.body.text,
          user:req.user.id
     })
     res.status(200).json(goal)

})
//@desc updategoals
//@route Put /api/goals
//@access private
const updateGoal=asyncHandler(async(req,res)=>{
     const goal=await Goal.findById(req.params.id)
     if(!goal){
          res.status(400)
          throw new Error('Goal not found')

     }
     const user=await User.findById(req.user.id)
     //check for user
     if(!user){
          res.status(401)
        
     throw new Error('User not found')
     }
     //make sure the login user matches the goal user
     if(goal.user.toString()!= user.id){
res.status(401)
throw new Error('User not authorized')
     }  

     //req.body will automatically create if it doesn't exist
     const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{new: true,})

     res.status(200).json(updatedGoal)

})
//@desc Delete goals
//@route Delete /api/goals
//@access private
const deleteGoal=asyncHandler(async(req,res)=>{
     const goal=await Goal.findById(req.params.id)
     if(!goal){
          res.status(400)
          throw new Error('Goal not found')

     }
     const user=await User.findById(req.user.id)
     //check for user
     if(!user){
          res.status(401)
        
     throw new Error('User not found')
     }
     //make sure the login user matches the goal user
     if(goal.user.toString()!= user.id){
res.status(401)
throw new Error('User not authorized')
     }  
 //await.goal.remove()    
await Goal.findByIdAndDelete(req.params.id)
res.status(200).json({id: req.params.id})
})
//@desc getgoals
//@route Get /api/goals
//@access private
const getGoal=asyncHandler(async(req,res)=>{
     const goal=await Goal.find({user:  req.user.id})
     res.status(200).json(goal)

})
module.exports={
     getGoal,
     setGoal,
     updateGoal,
     deleteGoal
}