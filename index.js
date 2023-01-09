const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));


const collection = require('./mongodb');

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

let myport = 5670;

app.get('/',(req,res) =>{
    res.render('login');
})

app.post('/thank',(req,res) =>{
     
    let data = {
        name : req.body.user,
        email : req.body.email,
        msg : req.body.message
    }

    collection.insertMany([data]);

    res.render('thank',{data});
})

app.listen(myport, () =>{
    console.log('listening on port http://localhost:'+myport);
})