const fs = require("fs/promises");
console.log("start");

// fs.writeFile("file.txt","I will be a great coder one day",(()=>{}));
// fs.readFile("./file.txt","utf-8",((err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// }))

const res = async ()=>{
    await fs.writeFile("file.txt","I am ok",(()=>{}));
    const ans = await fs.readFile("./file.txt","utf-8");
    console.log(ans);
}
res();

console.log("end");