const mongoose=require('mongoose')
const brandschema=mongoose.Schema({
     brandName:{
          type:String,
          required: [true,'please enter your name']
     },
     brandEmail:{
          type:String,
          required: [true,'please enter your email']
     },
    brandContactnumber:{
       type:String,
       required: [true,'please enter your contact number']
    },

brandAddress:{
     type:String,
     required:[true,'please enter your address']
},
password:{
     type:String,
     required: [true,'please enter your password'] 
},
subscriptionplan:{
     type:String,
     required:true  
},
brandImg:
{
    type:String
}
},
{
     timestamps:true
}
)
module.exports=mongoose.model('Brand',brandschema);