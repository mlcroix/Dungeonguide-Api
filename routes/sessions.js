var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var db = require('../db');

router.get('/', function(req, res, next) {
    var database = db.get();
    database.collection("sessions").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
      });
});

router.get('/:campaignId', function(req, res) {
    var database = db.get();

    var query = { campaignId: new ObjectId(req.params.campaignId) };
    database.collection("sessions").find(query).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

router.get('/:campaignId/create', function(req, res) {
    var database = db.get();

    var session = {
        _id : new ObjectId(),
        _campaignId : req.params.campaignId,
        name : 'New',
        date  :new Date(),
        text : "edit me!"
    }

    var query = { campaignId: new ObjectId(req.params.campaignId) };
    database.collection("sessions").insertOne(session, function(err, result) {
        if (err) throw err;
        res.json(session);
    });
});

  module.exports = router;