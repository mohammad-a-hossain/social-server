const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    username:{
        type:String,
        require:true,
        max:20,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6,
        max:10,
    },
    coverPicture:{
        type:String,
        default:''
    },
    profiePicture:{
        type:String,
        default:''
    },
    followers:{
        type:Array,
        default:[],
    },
    following:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    desc: {
        type: String,
        max: 50,
      },
      city: {
        type: String,
        max: 50,
      },
      from: {
        type: String,
        max: 50,
      },
      relationship: {
        type: Number,
        enum: [1, 2, 3],
      },
   
}, {timestamps:true})

module.exports = mongoose.model('User',userSchema)
