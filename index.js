const express = require("express");
const app=express();
const mongoose =require("mongoose")
const dotenv=require("dotenv");
const userRoute = require("./routes/user")
const authRoute =require("./routes/auth")


dotenv.config();

// console.log(process.env.PASS_SEC)
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connection Successful"))
.catch((err)=>{
    console.log(err)
})


// app.get("/api/test",()=>{
//     console.log("Test server is OK");
// });

app.use(express.json)
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);


app.listen(process.env.PORT || 4000,()=>{
    console.log("Backend Server is running")
});




