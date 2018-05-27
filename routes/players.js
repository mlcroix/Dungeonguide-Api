var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var db = require('../db');

router.get('/', function(req, res, next) {
    var database = db.get();
    database.collection("Players").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
      });
});

router.get('/username/:username', function(req, res) {
    var database = db.get();
    var query = { username: req.params.username };
    database.collection("Players").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});

router.post('/login', function(req, res) {
    var database = db.get();
    var post = req.body;
    var username = post.username;
    var query = { username: username };
    var currUser = database.collection("Players").find(query).toArray(function(err, result) {
    if (err) console.log("error: " + err);

    if(result[0].username == username && result[0].password == post.password){
        res.json(result[0])
    }
    else {
        res.status(404);
        res.json({message: "Not Found"});
    }
    });
});

module.exports = router;
