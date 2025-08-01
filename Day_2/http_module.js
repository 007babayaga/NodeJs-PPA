
const http  = require("http");

const server = http.createServer((req,res)=>{
    console.log("hello");
    res.writeHead(301, { location: "https://programmingpathshala.com/"});
    res.end("<h2 style='color:red '>hello from Node JS</h2>");
})

server.listen(3900,()=>{
    console.log("--------------Server Started-------------")
});

// to send a request from local machine do this http://localhost:3900
// Steps to crete a server
// 1.Sever module import kia
// 2. Server bnaya [https.creatae server(()=>{})] -- ye callback execute hoga jab server par  requets ayegi
// listen to a port