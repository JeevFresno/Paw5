/**
 * Created by Jeevjyot on 4/14/17.
 */


var express = require('express');
var mysql = require('mysql');
var sessions = require("client-sessions");

//Connection Information
var connection = mysql.createConnection({
    host     : 'bookupfresno.cwirkvfvbxk0.us-west-2.rds.amazonaws.com',
    user     : 'fresnoHack17',
    port     : '3306',
    database : 'bookup',
    password : 'FresnoHack17!'
});

connection.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }

    console.log('Connected to database.');
});

connection.query('select * from test',function(err,rows,field){
    if(!err){
        console.log(rows);
    }
    else{
        console.log(err);
    }
})
//connection.end();

var app = express();
console.log(__dirname);


app.use('/', express.static(__dirname + '/public/'));
/*app.get('/',function(req,res){
    res.send('Hello World');
})*/


/*
+++++++++++++++++ LOGIN SYSTEM+++++++++++++++++
*/
function loadProfile(){

}
app.get('/login',function(req,res){

    var fresnostateemail = req.query.email;
    var pass    = req.query.pwd;
    var query ="SELECT * from user where email = ? and password = ?";
    connection.query(query,[fresnostateemail,pass],function(err,rows,field){
        if(!err){
            if(rows.length>=1){
                console.log('error');
                req.session_state.username = fresnostateemail;
                loadProfile();
                console.send('success');
            }
        }else{
            res.send('error');
        }
    })
});

/*
 +++++++++++++++++ REGISTER SYSTEM for Professor/Student+++++++++++++++++
 */

app.get('/register',function(req,res){

        var firstname = req.query.fn;
        var lastname = req.query.ln;
        var email = req.query.em;
        var major = req.query.mj;
        var minor = req.query.mn;
        var password = req.query.pass;
        //var query="INSERT INTO USER SET ?";
        var stuORpro = req.query.EndUser;
        if(stuORpro == 'student'){
            var query = "INSERT INTO user SET ?;"
        }else{
            var query ="INSERT INTO professor SET ?;"
        }
        connection.query(query,{firstname:firstname,lastname:lastname,email:email,major:major,minor:minor,password:password,timestamp: new Date()},function(req,res){

                if(!err){
                    res.send('success');
                }else{
                    console.log(err.stack);
                    res.send('error');
                }
        });
});

/*
 +++++++++++++++++ Logout for Professor/Student+++++++++++++++++
 */
app.get('/logout',function(req,res){
    console.log('Logout Operation');
    req.session_state.destroy();
    res.send('success');
});

/*
+++++++++++++++++ Putting into Upload Table ++++++++++++++++++
*/

app.get('/uploadBooks',function(req,res){
    console.log('Putting the information in the books upload table');
    var bk = req.query.bookname;
    var auth = req.query.author;
    var em = req.query.email;
    var pub = req.query.publisher;
    var prc = req.query.price;
    var imgUrl = req.query.imageUrl;
    var wish = req.query.wishlist;
    var is = req.query.isbn;
    var query ="INSERT INTO upload SET ?";

    connection.query(query,{bookname:bk,author:auth,email:em,publisher:pub,price:prc,imageUrl:imgUrl,wishlist:wish,ISBN:is},function(err,rows,field){
        if(!err){
            console.log('Data uploaded');
            res.send('success');

        }else{
            console.log(err.stack);
            res.send('error');
        }
    })
});

/*
 +++++++++++++++++ Searching from the Database and displaying the proper result ++++++++++++++++++
 */

app.get('/searchDatabase',function(req,res){
    console.log('i am here');
    //var searchText = req.query.searchText;
    searchText='database';
    var query1="Select * from upload where MATCH(bookname,description) AGAINST ('"+ searchText+"' IN NATURAL LANGUAGE MODE)"
    connection.query(query1,function(err,rows,field){
        if(!err){

            console.log(rows);
            if(rows.length==0){
                var query2 ="";
                connection.query(query2,function(err,rows,field){

                });
            }
            res.send(rows);
        }else{
            console.log(err.stack);
        }
    })

});
var port = process.env.PORT || 3000;
var server = app.listen(port,function(req,res){
    console.log('Hello World');
    //res.send('Hello World');
});