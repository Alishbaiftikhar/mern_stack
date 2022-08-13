const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
     name:{
          type:String,
          required: [true,'plz add name']

     },
     email:{
          type: String,
          required:[true,'plz add an email'],
          unique: true
     },
     password:{
          type:String,
          required:[true,'plz add a password']
     },
     
},
{timestamps: true,}
)
module.exports=mongoose.model('User',userSchema)