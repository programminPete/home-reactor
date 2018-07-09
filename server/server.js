const express = require('express');
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const authController = require('./auth/authController');
let app = express();


app.get('/hello', (req, res) => {
  res.status(200);
  res.json({"hello": "world"});
})

/**
 * GOOGLE API CALL
 * 
 */
app.get('/googleapi', authController.getAuth, (req,res) =>{
  res.json('hello: world');
});


app.listen(5000, () => console.log('listening on port 5000'))
