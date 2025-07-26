const fs = require("fs");
console.log("start");

fs.writeFile("file.txt","Rajat",(()=>{}));
fs.readFile("./file.txt","utf-8",((err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
}))

console.log("end");