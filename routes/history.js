var express = require('express');
var router = express.Router();

var histories = [
    {id:1, campaignId: 1, name: "pilot", date: 11-12-1991, note: "blalvbldqjabckbc"},
    {id:2, campaignId: 1, name: "pilot2", date: 12-12-1991, note: "blalvbvhgvbc"},
    {id:3, campaignId: 1, name: "pilot3", date: 13-12-1991, note: "bcccccccccccjabckbc"},
    {id:4, campaignId: 2, name: "pilot4", date: 14-12-1991, note: "blalvbldqjajbnbkbjbbckbc"},
]

router.get('/', function(req, res, next) {
    res.json(histories);
  });

  router.get('/:campaignId', function(req, res) {
    var currHistory= histories.filter(function(history) {
        if(history.campaignId == req.params.campaignId){
            return true;
        }
    });
    if(currHistory.length > 0) {
        res.json(currHistory)
    }
    else{
        res.status(404);
        res.json({message: "Not Found"});
    }
  });

  module.exports = router;