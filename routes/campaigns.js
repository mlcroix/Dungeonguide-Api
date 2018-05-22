var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var db = require('../db');

router.get('/', function(req, res, next) {
    var database = db.get();
    database.collection("Campaigns").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});
/*
router.get('/id/:id', function(req, res) {
    var currCampaign = campaigns.filter(function(campaign) {
        if(campaign.id == req.params.id){
            return true;
        }
    });
    if(currCampaign.length == 1) {
        res.json(currCampaign[0])
    }
    else{
        res.status(404);
        res.json({message: "Not Found"});
    }
  });

  router.get('/playerid/:id', function(req, res) {
    var result = [];
    campaigns.filter(function(campaign) {
        var containsPlayer = campaign.players.forEach(function(player) {
            if(player == req.params.id) {
                console.log("meep");
                result.push(campaign);
                return true;
            }
        });
    });

    if(result.length > 0) {
        res.json(result)
    }
    else {
        res.status(404);
        console.log(result);
        res.json({message: "Not Found"});
    }
  });
*/

module.exports = router;