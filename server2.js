const express = require("express");
const mongoose = require("mongoose");

var app = express();
//map global promise - get rid of warning
mongoose.Promise = global.Promise;
// connect database
mongoose.connect('mongodb://localhost/flipkart' , {
    useMongoClient : true
}).then(()=>{
    console.log('mongodb connected')
}).catch((err)=>{
    console.log(err);
})

//load Idea Model
require('./Models/Idea');

const Idea = mongoose.model('ideas');

// middleware



// app.set('views' , './views');
app.set('view engine' , 'pug');


app.get('/' , (req , res)=>{
    res.render('index');
});

app.get('/add' , (req , res)=>{
    res.render('addform');
});



var port = 9000;
app.listen(port , (err)=>{
if(err){
    console.log(err)
}else {
    console.log('app is running on port number ' + port );
}
})