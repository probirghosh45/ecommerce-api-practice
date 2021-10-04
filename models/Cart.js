const mongoose = require("mongoose");
const CartSchema= new mongoose.Schema(
  {
      userId:{type:String,require:true},
      products:[
          {
              productId:{
                  type:String,
              },
              quantity:{
                  type:Number,
                  default:1
              }
          }
      ]
      
    //   createdAt:Date.now()
  },
  {timestamps:true}  
);

module.experts = mongoose.model("Cart",CartSchema)