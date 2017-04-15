/**
 * Created by Jeevjyot on 4/14/17.
 */


var express = require('express');
var mysql = require('mysql');
var sessions = require("client-sessions");
var mailer = require("nodemailer");
var accountSid = 'AC409154571e3ef4aec2424e58acdf9912';
var authToken = "28301d41cc0713701a29b858037a06f6";
var client = require('twilio')(accountSid, authToken);
var app = express();
//Connection Information
var connection = mysql.createConnection({
    host     : 'bookupfresno.cwirkvfvbxk0.us-west-2.rds.amazonaws.com',
    user     : 'fresnoHack17',
    port     : '3306',
    database : 'bookup',
    password : 'FresnoHack17!'
});
app.use(sessions({
    secret: '0GBlJZ9EKBt2Zbi2flRPvztczCewBxXK',
    activeDuration: 30 * 60 * 1000,// active duration.
}));

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

    console.log('Performing Login');
    var fresnostateemail = req.query.email;
    var pass    = req.query.pwd;
    var query ="SELECT * from user where email = ? and password = ?";
    connection.query(query,[fresnostateemail,pass],function(err,rows,field){
        if(!err){
            if(rows.length>=1){
                console.log('success');
                req.session_state.username = fresnostateemail;
                //loadProfile();
                res.send(fresnostateemail);
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
        var stuORpro = req.query.EndUser;
        var phone = req.query.ph;
        var query;
        console.log(stuORpro);
        console.log(phone);
        if(stuORpro == 'student'){
            query = "INSERT INTO user SET ?;"
        }else{
            query ="INSERT INTO professor SET ?;"
        }
        console.log(query);
        connection.query(query,{phoneNumber:phone,firstname:firstname,lastname:lastname,email:email,major:major,minor:minor,password:password,timestamp: new Date()},function(err,rows,field){
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

//Sending the EMAIL
app.get('/sendEmail',function(req,res){
    "use strict";
    var Sender_email = req.body.Semail;
    var Rec_email = req.body.Remail;

    // Use Smtp Protocol to send Email
    const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sirimax0@gmail.com',
            pass: 'YJn-crD-U4S-3EL'
        }
    });

// setup email data with unicode symbols
    let mailOptions = {
        from: '"Jeevjyot singh Chhabda" <'+ Sender_email +'>', // sender address
        to: Rec_email, // list of receivers
        subject: 'Hello', // Subject line
        text: 'Hello world ?', // plain text body
        html: '<b>Hello world ?</b>' // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
});
});

/*
 +++++++++++++++++ Sending the text ++++++++++++++++++
 */
app.get('/sentText',function(req,res){
    console.log('sending message');

    var phoneNum= req.query.ph;
    var body = req.query.textBody;
    client.messages.create({
        to: phoneNum,
        from: "+16789229254",
        body: body
    }, function(err, message) {
        if(err){
            console.log(err);
        } else {
            console.log(message.sid);
        }
    });
});

//fetching the profile information
app.get('/profile',function(req,res){
    var email = req.query.email;

    var query="SELECT * from user where email = ?";
    connection.query(query,[email],function(rows,fields,err){
        if(!err){
            res.send(rows);
        }else{
            console.log('err');
        }
    });
});

//fetching the uploaded books
app.get('/getUploadedBooksByEmail',function(req,res){

    var email = req.query.email;

    var query = "SELECT * from upload where email = ?";
    connection.query(query,[email],function(rows,fields,err){
        if(!err){
            res.send(rows);
        }else{
            console.log('err');
        }
    });

})
/// Fetching the 3 latest record
app.get('/latest3',function(req,res){

    /*SELECT Date, User, Status, Notes
    FROM Test_Most_Recent
    WHERE Date in ( SELECT MAX(Date) from Test_Most_Recent group by User)*/

    var query ="SELECT bookname,author,price,email,publisher,ISBN,imageUrl,description,timestamp from upload where timestamp in (SELECT MAX(timestamp) from upload group by bookname";

    connection.query(query,function(err,rows,field){

        if(!err){
            res.send(rows);
        }else{
            console.log(err.stack);
            res.send('error');
        }
    });

});
var port = process.env.PORT || 3000;
var server = app.listen(port,function(req,res){
    console.log('Hello World');
    //res.send('Hello World');
});