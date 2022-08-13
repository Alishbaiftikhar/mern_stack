const mongoose=require('mongoose')
const goalschema=mongoose.Schema({
     text:{
type:String,
required:[true,'please add a text value']
}

},
// updated and created that field automatically
{
     timestamps:true
})
module.exports=mongoose.model('Goal',goalschema)