var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var MongoClient = require('mongodb').MongoClient;
var db = require('./db');

db.connect();

var indexRouter = require('./routes/index');
var playersRouter = require('./routes/players');
var campaignsRouter = require('./routes/campaigns');
var sessionsRouter = require('./routes/sessions');
var notesRouter = require('./routes/notes');

app.use('/', indexRouter);
app.use('/players', playersRouter);
app.use('/campaigns', campaignsRouter);
app.use('/sessions', sessionsRouter);
app.use('/notes', notesRouter);

http.listen(3000, function(){
  console.log('listening on *:3000');
});

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});
