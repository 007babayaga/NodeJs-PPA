// // const fs = require("fs/promises");
// // console.log("start");

// // // fs.writeFile("file.txt","I will be a great coder one day",(()=>{}));
// // // fs.readFile("./file.txt","utf-8",((err,data)=>{
// // //     if(err){
// // //         console.log(err);
// // //     }
// // //     else{
// // //         console.log(data);
// // //     }
// // // }))

// // const res = async ()=>{
// //     await fs.writeFile("file.txt","I am ok",(()=>{}));
// //     const ans = await fs.readFile("./file.txt","utf-8");
// //     console.log(ans);
// // }
// // res();

// // console.log("end");

// const fs = require("fs/promises");
// // Sync way that is blocking the main thread;
// // const start = performance.now();
// // fs.writeFile("file.txt","Hi My name is Rajat",(()=>{}));
// // const end = performance.now();
// // console.log(end-start);
// const data = async ()=>{
//     const res =  await fs.writeFile("file.txt","Hi I am Rajat");
//     const ans = await fs.readFile("file.txt","utf-8",(()=>{}));
//     console.log(ans);
// }
// data();
// const os = require('node:os');
// // // console.log()
// // console.log(process);
// let crypto;
// try {
//   crypto = require('node:crypto');
// } catch (err) {
//   console.error('crypto support is disabled!');
// }
// const {pbkdf2,pbkdf2Sync} = require("crypto");

// const key = pbkdf2Sync('secret', 'salt', 1999900, 64, 'sha512');
// console.log(key.toString('hex')); 
// blocking the main thread

// for(let i=0;i<10;i++){
//     const start = performance.now();
//     const key = pbkdf2('secret', 'salt', 19999, 10, 'sha512',((err, hash)=>{
//     if (err) throw err;
//       console.log(hash.toString('hex')); 
//       const end = performance.now();
//       console.log("diff = " ,end-start);
//     }));
//     console.log("eee")
// }
// const http = require("http");

// const server = http.createServer((req,res)=>{
//   console.log("hello");
//   res.end("Hello from Practice folder")
// })
// server.listen(3900,()=>{
//   console.log("-------server is Running-----------");
// })

const http = require("http");

const server = http.createServer((req, res) => {
  const headers = new Headers({ 'Content-Type': 'text/html' });
  res.setHeaders(headers);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ofk');
}); 

server.listen(3900,()=>{
  console.log("----------server Started------------------");
})


