var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var db = require('../db');

router.get('/', function(req, res, next) {
    var database = db.get();
    database.collection("notes").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

router.get('/:campaignId', function(req, res) {
    var database = db.get();
    var query = { campaignId: new ObjectId(req.params.campaignId) };
    database.collection("notes").find(query).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

  router.get('/:campaignId/:playerId', function(req, res) {
    var database = db.get();
    var query = { campaignId: new ObjectId(req.params.campaignId), playerId : new ObjectId(req.params.playerId) };
    database.collection("notes").find(query).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    });
  });

  router.post('/remove', function(req, res) {
    var database = db.get();
    var query = { "_id": ObjectId(req.body._id) };
    database.collection("notes").remove(query, function(err, result) {
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

router.post('/update', function(req, res) {
    var database = db.get();
    var query = { "_id": ObjectId(req.body._id) };
    var newValues = { $set: {name: req.body.name, text: req.body.text } };
    database.collection("notes").updateOne(query, newValues, function(err, result) {
        var response;
        if (err) {
            response = {
                message : err,
                updated : false
            }
        } else {
            response = {
                message : "succes",
                updated : true
            }
        }
        res.json(response);
    });
});

module.exports = router;