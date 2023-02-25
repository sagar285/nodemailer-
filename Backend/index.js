const express = require("express");
const app =express()
const cors =require("cors");
const nodemailer =require("nodemailer")
app.use(express.json())
app.use(cors())


// app.post("/send",(req,res)=>{
//     console.log(req.body);
//     res.send("this is home orute");
// })
app.post("/send",(req,res)=>{
    console.log("sadcvxcb");
    console.log(req.body);
    let transporter =nodemailer.createTransport({
        service: "gmail",
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
            user:"gtest3681@gmail.com",
            pass:"uywjvnvkrjnrolrp"
        }
    })
    let mailOption ={
        from:"gtest3681@gmail.com",
        to:req.body.email,
        text:"hello world"
    };

 transporter.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log(info.response);
    }
 })
})

app.listen(3000,()=>{
    console.log("server runing on port no3000");
})