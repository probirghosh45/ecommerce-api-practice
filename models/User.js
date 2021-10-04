const mongoose = require("mongoose");
const UserSchema= new mongoose.Schema(
  {
      username:{type:String,require:true,unique:true},
      email:{type:String,require:true,unique:true},
      password:{type:String,required:true},
      isAdmin:{
          type:Boolean,
          default:false,
      },
    //   createdAt:Date.now()
  },
  {timestamps:true}  
);

module.experts = mongoose.model("User",UserSchema)