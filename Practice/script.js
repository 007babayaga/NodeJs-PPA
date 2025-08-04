// // // // const fs = require("fs/promises");
// // // // console.log("start");

// // // // // fs.writeFile("file.txt","I will be a great coder one day",(()=>{}));
// // // // // fs.readFile("./file.txt","utf-8",((err,data)=>{
// // // // //     if(err){
// // // // //         console.log(err);
// // // // //     }
// // // // //     else{
// // // // //         console.log(data);
// // // // //     }
// // // // // }))

// // // // const res = async ()=>{
// // // //     await fs.writeFile("file.txt","I am ok",(()=>{}));
// // // //     const ans = await fs.readFile("./file.txt","utf-8");
// // // //     console.log(ans);
// // // // }
// // // // res();

// // // // console.log("end");

// // // const fs = require("fs/promises");
// // // // Sync way that is blocking the main thread;
// // // // const start = performance.now();
// // // // fs.writeFile("file.txt","Hi My name is Rajat",(()=>{}));
// // // // const end = performance.now();
// // // // console.log(end-start);
// // // const data = async ()=>{
// // //     const res =  await fs.writeFile("file.txt","Hi I am Rajat");
// // //     const ans = await fs.readFile("file.txt","utf-8",(()=>{}));
// // //     console.log(ans);
// // // }
// // // data();
// // // const os = require('node:os');
// // // // // console.log()
// // // // console.log(process);
// // // let crypto;
// // // try {
// // //   crypto = require('node:crypto');
// // // } catch (err) {
// // //   console.error('crypto support is disabled!');
// // // }
// // // const {pbkdf2,pbkdf2Sync} = require("crypto");

// // // const key = pbkdf2Sync('secret', 'salt', 1999900, 64, 'sha512');
// // // console.log(key.toString('hex')); 
// // // blocking the main thread

// // // for(let i=0;i<10;i++){
// // //     const start = performance.now();
// // //     const key = pbkdf2('secret', 'salt', 19999, 10, 'sha512',((err, hash)=>{
// // //     if (err) throw err;
// // //       console.log(hash.toString('hex')); 
// // //       const end = performance.now();
// // //       console.log("diff = " ,end-start);
// // //     }));
// // //     console.log("eee")
// // // }
// // // const http = require("http");

// // // const server = http.createServer((req,res)=>{
// // //   console.log("hello");
// // //   res.end("Hello from Practice folder")
// // // })
// // // server.listen(3900,()=>{
// // //   console.log("-------server is Running-----------");
// // // })

// // // const http = require("http");

// // // const server = http.createServer((req, res) => {
// // //   const headers = new Headers({ 'Content-Type': 'text/html' });
// // //   res.setHeaders(headers);
// // //   res.writeHead(200, { 'Content-Type': 'text/plain' });
// // //   res.end('ofk');
// // // }); 

// // // server.listen(3900,()=>{
// // //   console.log("----------server Started------------------");
// // // })

// // const http = require('http');
// // const fsPromises = require("fs/promises");

// // const server = http.createServer( async(req,res)=>{
// //   console.log(req.url,req.method,new Date());
// //  if(req.url=="/"){
// //   const data = await fsPromises.readFile("../Day_3/Pages/HomePage.html","utf-8")
// //   res.writeHead(200,{'content-type':'text/html'})
// //   res.end(data)
// //  }
// //  else  if(req.url=="/HomePage.js"){
// //   const data = await fsPromises.readFile("../Day_3/Pages/HomePage.js","utf-8")
// //   res.writeHead(200,{'content-type':'text/javascript'})
// //   res.end(data)
// //  }
// //  else  if(req.url=="/about"){
// //   const data = await fsPromises.readFile("../Day_3/Pages/AboutPage.html","utf-8")
// //   res.writeHead(200,{'content-type':'text/html'})
// //   res.end(data)
// //  }
// // })

// // server.listen(3900,()=>{
// //   console.log('-----------Server Started--------')
// // })


// // node Js is used to run js ouside the browser --- it is just a environment 
// // modules lao make the node js work extra ordinary
// // 3 types of moduels 1.user defined(made in .js files) 2. internal modules -(fs,os,http) 3. external modules(express)
// // dev defined mofules - (modules.exports is done) - (and in which file is required require is done)
// // fs module (file system module)
// // const fs = require('fs');
// // const { helper } = require('./Helper');
// // console.log("hi");
// // fs.writeFile("file.txt","my name is rajat",(()=>{}));
// // fs.readFile("file.txt","utf-8",(err,res)=>{
// //   if(res){
// //     console.log(res);
// //   }
// //   else{
// //     console.log(err);
// //   }
// // })

// // console.log("hello");

// // const fsPromises = require("fs/promises");

// // const ans = async()=>{
// //   const data = await fsPromises.readFile('file.txt',"utf-8");
// //   console.log(data);
// // }
// // ans();
// // const {pbkdf2,pbkdf2Sync} = require('crypto');
// // console.log("hi")
// // const data = pbkdf2("Rajat","this is my salt",8899898,10,'sha512',((error,key)=>{
// //   if(key){
// //     console.log(key.toString('hex'))
// //   }
// //   else{
// //     console.log(error);
// //   }
// // }));

// // console.log('hello')
// // simple words sync way to generate hash blocks the main thread 
// // use ansync way as it is non blocking because it offloads the task to thread pool and manged by event lopp from there


// // ab mein seerver bnaunga
// const http = require('http');
// const fs = require('fs/promises');
// const server = http.createServer(async(req,res)=>{
//   if(req.url=="/"){
//   console.log(req.url,req.method)
//   const data = await fs.readFile("../Day_3/SSR/Pages/HomePage.html","utf-8");
//   console.log(data);
//   const newdata =  data.replace("--MAIN--","oiuyghkjh");
//   console.log(newdata)
//   res.end(newdata);

//   }
// })

// server.listen(3900,()=>{
//   console.log("----------server started--------")
// })
// //asie hi req.url ko dekh kr hum kafe sare resppose bhenj skte hai

