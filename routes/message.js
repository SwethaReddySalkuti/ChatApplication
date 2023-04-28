const express = require('express');
const data = require('./data');
const router = express.Router();

router.get('/',(req,res,next) => {
    console.log("Inside Message");
    
});

router.post('/',(req,res,next) => {
    data.push(`{${req.body.username}:${req.body.message}}`)
    console.log(data);
    console.log(`{${req.body.username}:${req.body.message}}`)
    res.redirect('/');
})

module.exports=router;
