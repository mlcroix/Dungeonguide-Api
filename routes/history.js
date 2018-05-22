var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var db = require('../db');

router.get('/', function(req, res, next) {
    var database = db.get();
    database.collection("Histories").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
      });
});

router.get('/:campaignId', function(req, res) {
    var database = db.get();

    var query = { campaignId: new ObjectId(req.params.campaignId) };
    database.collection("Histories").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});

  module.exports = router;