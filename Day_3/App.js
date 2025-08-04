const http = require('http');
const fsPromises = require("fs/promises");
const { ProductsCard } = require('./SSR/Pages/Product_card_helper');

const server = http.createServer(async(req,res)=>{
    console.log("--->",req.method,req.url,new Date());
    try{
        if(req.url=="/"){
            const data =  await fsPromises.readFile("./SSR/Pages/HomePage.html","utf-8");

            const cardStr =  await ProductsCard();

            const newData = data.replace('--MAIN--',cardStr)

            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(newData);
        }
        else if(req.url=="/about"){
            const data =  await fsPromises.readFile("./SSR/Pages/AboutPage.html","utf-8");
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(data);
        }
        else{
            const data =  await fsPromises.readFile("./SSR/Pages/NotFoundPage.html","utf-8");
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(data);
        }
    }
    catch(err){
        console.log(err);
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end("<h2>Some error Occured</h2>")
    }
    
})

server.listen(3900,()=>{
    console.log("-----------Server Started-----------")
});