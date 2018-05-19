var express = require('express');
var router = express.Router();


var campaigns = [
    {id: 1, name: "meep", players: [1,3,2], dungeonMaster: 2},
    {id: 1, name: "moop", players: [1,3], dungeonMaster: 1},
    {id: 1, name: "maap", players: [1,3,2], dungeonMaster: 3},
]

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


module.exports = router;