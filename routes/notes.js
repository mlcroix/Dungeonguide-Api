var express = require('express');
var router = express.Router();

var notes = [
    {id: 1, playerid: 1, campaignid: 1, date: 11-12-1991, note: "fcbwsikbwsbcwsbcswbcikwsbcikuswbhc"},
    {id: 2, playerid: 1, campaignid: 2, date: 11-12-1991, note: "fcbwsikbwsbcuswbhc"},
    {id: 3, playerid: 2, campaignid: 1, date: 11-12-1991, note: "fcbwsikbwsbcwsbcgcfgxctgfcgcgcgcwsbcikuswbhc"},
    {id: 4, playerid: 3, campaignid: 3, date: 11-12-1991, note: "fcbwsikbwsbcwsbcswbcikwsbhvjhvhjvbhc"},
]

router.get('/', function(req, res, next) {
    res.json(notes);
  });

router.get('/:campaignId', function(req, res) {
    var currNotes = notes.filter(function(note) {
        if(note.campaignid == req.params.campaignId){
            return true;
        }
    });
    if(currNotes.length > 0) {
        res.json(currNotes)
    }
    else{
        res.status(404);
        res.json({message: "Not Found"});
    }
  });

  router.get('/:campaignId/:playerId', function(req, res) {
    var currNotes = notes.filter(function(note) {
        if(note.campaignid == req.params.campaignId && note.playerid == req.params.playerId){
            return true;
        }
    });
    if(currNotes.length > 0) {
        res.json(currNotes)
    }
    else{
        res.status(404);
        res.json({message: "Not Found"});
    }
  });

module.exports = router;