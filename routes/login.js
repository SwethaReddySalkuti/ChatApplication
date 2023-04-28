const express = require('express');

const router = express.Router();

router.get('/login',(req,res,next) => {
    console.log("Inside Login");
    res.send(`
        <form  method ="POST" >
        <label>User Name : </label>
        <input type = "text" name = "username">
        <button type= "submit">Login</button>
        </form>

    `);
});

module.exports=router;

//onsubmit="localStorage.setItem(`{username}`, document.getElementById(`{username}`).value)   "action ="/"