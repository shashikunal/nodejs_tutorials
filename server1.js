const express = require('express');
let app = express();

// middleware

app.set('view engine' , 'pug');


app.get('/' , (req , res)=>{
    res.render('index')
})


const port = process.env.PORT || 3000;
app.listen(port , (err)=>{
    if(err) {console.log(err)
    }else {
        console.log('app is running on ' + port);
    }
    
})