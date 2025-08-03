const http = require('http');
const fsPromises = require("fs/promises");

const server = http.createServer(async(req,res)=>{
    console.log("--->",req.method,req.url,new Date());
    try{
        if(req.url=="/"){
            const data =  await fsPromises.readFile("./Pages/HomePage.html","utf-8");
            const newData = data.replace('--MAIN--',"<h2>--NEW_MAIN--</h2>")
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(newData);
        }
        else if(req.url=="/about"){
            const data =  await fsPromises.readFile("./Pages/AboutPage.html","utf-8");
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(data);
        }
        else{
            const data =  await fsPromises.readFile("./Pages/NotFoundPage.html","utf-8");
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(data);
        }
    }
    catch(err){
        console.log(err.message);
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end("<h2>Some error Occured</h2>")
    }
    
})

server.listen(3900,()=>{
    console.log("-----------Server Started-----------")
});