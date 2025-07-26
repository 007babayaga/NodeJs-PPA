const fs = require ("fs");

console.log("Start");

fs.readFile("./file.txt","utf-8",((err,data)=>{
    if(err){
        console.log("err",err);
    }
    else{
        console.log("data :",data);
    }
}))
console.log("end");

// The asnyc task is send to thread pool making node js non-blocking (despite it being a single thread language)