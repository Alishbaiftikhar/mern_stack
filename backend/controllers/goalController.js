const asyncHandler= require('express-async-handler')
//@desc setgoals
//@route Post /api/goals
//@access private
const setGoal=asyncHandler (async(req,res)=>{

     if (!req.body.text){
     res.status(400)
     throw new Error('plz add text field')
     }
     res.status(200).json({message:'set goal'})

})
//@desc updategoals
//@route Put /api/goals
//@access private
const updateGoal=asyncHandler(async(req,res)=>{
     res.status(200).json({message: `Update Get goals ${req.params.id}`})

})
//@desc Delete goals
//@route Delete /api/goals
//@access private
const deleteGoal=asyncHandler(async(req,res)=>{
     res.status(200).json({message: `Delete goals ${req.params.id}`})

})
//@desc getgoals
//@route Get /api/goals
//@access private
const getGoal=asyncHandler(async(req,res)=>{
     res.status(200).json({message: 'Get goals'})

})
module.exports={
     getGoal,
     setGoal,
     updateGoal,
     deleteGoal
}