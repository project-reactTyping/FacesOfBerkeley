const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
var User = require('./models/users.js');

const PORT = process.env.PORT || 3001;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);

app.get('/api/signup', function(req, res) {
  console.log('signup!!!!!!');
  res.json({ hey: 'hey'});
})

mongoose.Promise = global.Promise;
// Connect to the Mongo DB
var db = process.env.MONGODB_URI || 'mongodb://localhost/FacesOfBerkeley';

mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('mongoose connection is successful');
  }
});

app.get('/api/user', function(req, res) {
  User.find({})
  .exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.post('/api/user', function(req, res) {
  var newUser = new User(req.body);
  console.log(req.body);
  newUser.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.delete('/api/user/', function(req, res) {
  var url = req.param('url');
  User.find({ url: url }).remove().exec(
    function(err) {
      if (err) {
        console.log(err);
      }
      else {
        res.send('deleted');
      }
    });
});

// Send every request to the React app
// Define any API routes before this runs

app.get("*", function(req, res) {
  if ( process.env.NODE_ENV === 'production' ) {
    res.sendFile(__dirname + "/client/build/index.html");
  } else {
    res.sendFile(__dirname + "/client/public/index.html");
  }
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
