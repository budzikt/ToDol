//Importy node.js
var util = require('util');
var querystring = require('querystring');
var path = require('path');
var fs = require('fs');
var assert = require('assert');
var http = require('http');

var express = require('express');

var app = express();
app.get('/notes/:noteId', (req,res)=>{
    var reqId = req.param('noteId')

    res.json({text: 'Hello Wordl', id: reqId});
})



app.listen(8888, function(){
    console.log("Listening on port 8888")
})