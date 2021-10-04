const mongoose = require("mongoose");
const ProductSchema= new mongoose.Schema(
  {
      title:{type:String,require:true,unique:true},
      description:{type:String,require:true,unique:true},
      img:{type:String,require:true},
      categories:{type:Array,required:true},
      size:{type:String},
      color:{type:String},
      price:{type:Number}

    //   createdAt:Date.now()
  },
  {timestamps:true}  
);

module.experts = mongoose.model("Product",ProductSchema)