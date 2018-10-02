var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req , res){
    console.log('request made on' + req.url);
    if(req.url === '/home' || req.url === '/'){
        
        res.writeHead(200 , {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);

    }else if(req.url === '/contact'){
        res.writeHead(200 , {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else {
        res.writeHead(404 , {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/pagenotfound.html').pipe(res);
    }
});

server.listen(3000 , function(err){
    if(err){
        console.log(req);
    }else {
        console.log('app is running on port number 3000');
    }
})