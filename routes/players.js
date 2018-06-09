var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var db = require('../db');

router.get('/', function(req, res, next) {
    var database = db.get();
    database.collection("players").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
      });
});

router.get('/username/:username', function(req, res) {
    var database = db.get();
    var query = { username: req.params.username };
    database.collection("players").find(query).toArray(function(err, result) {
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
    var currUser = database.collection("players").find(query).toArray(function(err, result) {
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

router.post('/remove', function(req, res) {
    var database = db.get();
    var query = { "_id": ObjectId(req.body._id) };
    database.collection("players").remove(query, function(err, result) {
        var response;
        if (err) {
            response = {
                message : err,
                deleted : false
            }
        } else {
            response = {
                message : "succes",
                deleted : true
            }
        }
        res.json(response);
    });
});

module.exports = router;
