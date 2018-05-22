var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbname = "Dungeonguide";
var database = null;

exports.connect = function() {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        database = db.db("DungeonGuide");
        console.log("database is running");
      });
}

exports.get = function() {
   if(database) {
       return database;
   }
}

exports.close = function() {
    db.close();
}
