const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet= require('helmet')
const nodemon = require('nodemon')
const morgan = require('morgan')
const useRouter= require('./routes/user')
const authRoter= require('./routes/auth')


const app = express()
/* app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); */


//middleweare
app.use(express.json())
express.urlencoded({extended:true}),
app.use(helmet())
app.use(morgan('common'))

//routes
app.use('/api/user',useRouter)
app.use('/api/auth',authRoter)






// use application
app.get('/',(req,res)=>{
    res.send('welcome to social backend')
})




dotenv.config()
const PORT= process.env.PORT || 9000

mongoose.connect(
    process.env.URL,
    { useNewUrlParser: true,
     useUnifiedTopology: true },
    mongoose.set('strictQuery', false),
  ).then(() =>
  app.listen(PORT, () => console.log("Server up and running!")))
 .catch((error) => console.log(error.message))



 






