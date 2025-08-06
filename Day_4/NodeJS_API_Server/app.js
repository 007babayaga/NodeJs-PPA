const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("==>",req.method,req.url)

    res.writeHead(200,{'content-type':'text/json'});
    res.end(JSON.stringify({
        isSuccess:"true",
        serverStatus:"Server is Running fine"
    }))
})

server.listen(5400,()=>{
    console.log("----------Server is Started------------")
})