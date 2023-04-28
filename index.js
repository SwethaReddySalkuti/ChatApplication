const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
//const loginRouter = require('./routes/login.js');
//const messageRouter = require('./routes/message.js');
app.use(bodyParser.urlencoded({extended:false}));
//app.use(loginRouter);
//app.use(messageRouter);


app.get('/',(req,res,next) => {
    fs.readFile('username.txt' , (err,data) => {
        if(err){
            console.log(err);
            data = 'No Chat Exists'
        }
        //console.log(data);
        res.send(`
        ${data}<form action ="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username') method ="POST" >
        <label>Message : </label>
        <input type = "text" name = "message" id = "message">
        <input type = "hidden" name = "username" id = "username">
        <br/>
        <button type = "submit">Send</button>
        </form>

    `);
    })
});

app.post('/',(req,res,next) => {
   // console.log(req.body.username)
   // console.log(re.body.message)
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag : 'a'},(err) =>
    {
        console.log(req.body.username);
        console.log(req.body.message);
        if(err)
        {

        }   
        else
        {
            res.redirect("/");
        }
    });
});
app.get('/login',(req,res,next) => {
    res.send(`
        <form action = '/login' onsubmit="localStorage.setItem('username',document.getElementById("username").value)" method="POST" >
        <label>Username : </label>
        <input type = "text" name = "username" id = "username">
        <br/>
        <button type = "submit">Login</button>
        </form>
    `)
});
app.post('/login',(req,res,next) => {
   // console.log(req.body.username);
   // localStorage.setItem('username',req.body.username);
    res.redirect('/');
});
app.listen(5500);