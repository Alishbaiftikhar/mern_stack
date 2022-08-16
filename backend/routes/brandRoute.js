const express=require('express');
const router=express.Router();
const multer=require('multer') 
const Storage=multer.diskStorage({
     destination:function(req,file,cb){
          console.log('in')
     cb(null,'./uploads/')
     },
     filename:function(req,file,cb){
          cb(null,new Date().toISOString()+file.originalname);
     },
     
}

)
const fileFilter=(req,file,cb)=>{
     if(file.minetype==='image/jpeg'||file.minetype==='image/png'){
     cb(null,true)
     }else{
     cb(null,true)
     }
};
const upload=multer({dest:'uploads/',limits:{
     fileSize:1024*1024*5
},
fileFilter:fileFilter 
});
const {protect}=require('../middleware/authNiddleware')
const {registerBrand,loginBrand,getBrand}=require('../controllers/brandController')
router.post('/',upload.single('brandImg'),registerBrand)
router.post('/login',loginBrand)
router.get('/getbrand/:bid',protect,getBrand)
module.exports=router;