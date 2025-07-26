const fspromises = require("fs/promises");

console.log("hello");

const data = async ()=>{
   const data = await fspromises.readFile("./file.txt","utf-8");
   console.log(data);
}
data();
console.log("end");