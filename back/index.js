//Importy node.js
var util = require('util');
var querystring = require('querystring');
var path = require('path');
var fs = require('fs');
var assert = require('assert');
var http = require('http');
var cors = require('cors');


var express = require('express');
var redis = require('redis');
var Promise = require("bluebird");

var app = express();
var client = redis.createClient();


client.on("error", function (err) {
    console.log("Error " + err);
});

//app.use(cors({origin: 'http://localhost:4200'}));

// Add headers
app.use(function (req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        // Pass to next layer of middleware
        next();
    });

app.get('/notes/:noteId', (req,res)=>{
    var reqId = req.param('noteId')
    res.json({text: 'Hello Wordl', id: reqId});
})

app.get('/witaj/:name/:age', (req,res)=>{
    var name = req.param('name');
    var age = req.param('age');
    client.set('user', name, (err, rep)=> {
        console.log(rep);
        if(err){
            console.log(err)
        }
    })
    client.get('user', (err,rep)=>{
        if(rep){
            res.json({'user': rep})
        }
        if(err){
            res.json({'erorr': err})
        }
        res.end();
    })
})


app.listen(8888, function(){
    console.log("Listening on port 8888")
})