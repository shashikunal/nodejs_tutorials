const http = require('http');

const server = http.createServer((req , res)=>{
    res.writeHead(200 , {'Content-Type':'text/html'});
    res.end('<h1>this is node js server');
  

});

server.listen(3000 , function(err){
    if(err){
        console.log(err)
    }else {
        console.log(`this is server is running on port number 3000`);
    }
})