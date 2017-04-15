/**
 * Created by Jeevjyot on 4/14/17.
 */


var express = require('express');

var app = express();


app.get('/',function(req,res){
    res.send('Hello World');
})
app.listen(3000,function(req,res){
    console.log('Hello World');
    //res.send('Hello World');
})