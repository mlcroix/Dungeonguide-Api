var express = require('express');
var router = express.Router();

var users = [
  {id:1, name:"bob", username:"bobo", password:"jcbhkjcbak"},
  {id:2, name:"hans", username:"hansje3", password:"jcbhkjcbak"},
  {id:3, name:"bert", username:"bertje", password:"jcbhkjcbak"},
  {id:4, name:"harry", username:"haurry", password:"jcbhkjcbak"},
]

router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/id/:id', function(req, res) {
  var currUser= users.filter(function(user) {
      if(user.id == req.params.id){
          return true;
      }
  });
  if(currUser.length == 1) {
      res.json(currUser[0])
  }
  else{
      res.status(404);
      res.json({message: "Not Found"});
  }
});

router.get('/username/:username', function(req, res) {
  var currUser= users.filter(function(user) {
      if(user.username == req.params.username){
          return true;
      }
  });
  if(currUser.length == 1) {
      res.json(currUser[0])
  }
  else{
      res.status(404);
      res.json({message: "Not Found"});
  }
});

  router.post('/login', function(req, res) {
      var post = req.body;
      var username = post.username;
      console.log(username);
      var currUser= users.filter(function(user) {
          if(user.username == username){
              console.log("found bobo");
              return true;
          }
        });
      if(currUser.length == 1 && currUser[0].password === post.password) {
            res.json(currUser[0])
      }
      else{
          res.status(404);
          res.json({message: "Not Found"});
      }
    });

module.exports = router;
