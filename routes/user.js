const router = require('express').Router()

router.get('/',(req,res)=>{
 res.send('this is user get rout')
})

module.exports=router