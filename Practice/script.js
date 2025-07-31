// const fs = require("fs/promises");
// console.log("start");

// // fs.writeFile("file.txt","I will be a great coder one day",(()=>{}));
// // fs.readFile("./file.txt","utf-8",((err,data)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //     else{
// //         console.log(data);
// //     }
// // }))

// const res = async ()=>{
//     await fs.writeFile("file.txt","I am ok",(()=>{}));
//     const ans = await fs.readFile("./file.txt","utf-8");
//     console.log(ans);
// }
// res();

// console.log("end");

const fs = require("fs/promises");
// Sync way that is blocking the main thread;
// const start = performance.now();
// fs.writeFile("file.txt","Hi My name is Rajat",(()=>{}));
// const end = performance.now();
// console.log(end-start);
const data = async ()=>{
    const res =  await fs.writeFile("file.txt","Hi I am Rajat");
    const ans = await fs.readFile("file.txt","utf-8",(()=>{}));
    console.log(ans);
}
data();
