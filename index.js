var stuff = require('./count');
var http = require('http');
var fs = require('fs');

console.log(stuff.counter(['java' , 'nodejs']));
console.log(stuff.totalArray(3 , 3));


var server = http.createServer(function(req , res){
    res.writeHead(200 , {'Content-Type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html' , 'utf8');
    myReadStream.pipe(res);
    // res.end('<h1>hello This is nodejs</h1>');




});

server.listen(3000 , function(err){
    if(err){
        console.log(err);
    }else {
        console.log('app is running on port number 3000');
    }
})

// var myReadStream = fs.createReadStream(__dirname + '/readme.txt' , 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

// myReadStream.on('data' , function(chunk){
//     console.log('new chunk received');
//     console.log(chunk)
//     myWriteStream.write(chunk);
// });

// myReadStream.pipe(myWriteStream);





