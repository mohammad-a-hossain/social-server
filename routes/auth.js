const router = require('express').Router()
const user = require('../modal/user')
const User = require('../modal/user')
const bcrypt= require('bcrypt')


//register
router.get('/',(req,res)=>{
    res.send('auth get router')
})

router.post('/register', async(req, res)=>{
        
                const {username, email, password} =  req.body 
          
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt);

           try{  
      

               const user = new User({
                 username,
                    email,
                  password:hashedPassword 

                })
         await user.save()
       
        }catch(err) {
            console.log(err)
            res.status(500).json(err)
            }
        return res.status(201).json({user})

})


//login user
router.post('/login', async(req, res)=>{
        


try{  
   const user = await User.findOne({email: req.body.email })
   !user && res.status(404).json('user not found')
    
   const validePassword= await bcrypt.compare(req.body.password , user.password)
   !validePassword && res.status(404).json('wrong pass not found')
   res.status(200).json(user)


}catch(err) {
console.log(err)
res.status(500).json(err)
}


})
module.exports = router






