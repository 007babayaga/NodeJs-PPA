const express = require('express');
const emoji = require('node-emoji');


const app = express();

app.get('/',(req,res)=>{
    console.log("Request (GET)  received on /  ");
    res.json({
        isSuccess:"true",
        message:"server (GET) is running fine",
        data:{},
    })
})
app.post('/',(req,res)=>{
    console.log("Request (POST)  received on /  ");
    res.json({
        isSuccess:"true",
        message:"server (POST)  is running fine",
        data:{},
    })
})

app.listen(4500,()=>{
    console.log('--------Server Started--------',emoji.get('rocket'));
})