var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var db = require('../db');

router.get('/', function(req, res, next) {
    var database = db.get();
    database.collection("campaigns").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});

router.get('/id/:id', function(req, res) {
    var database = db.get();
    var query = { _id: new ObjectId(req.params.id) };
    database.collection("campaigns").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});

router.get('/playerid/:id', function(req, res) {
    var database = db.get();
    var query = { players: new ObjectId(req.params.id) };
    var result = [];

    database.collection("campaigns").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });

  });

module.exports = router;