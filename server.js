const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const passport = require('passport')
  ,FacebookStrategy = require('passport-facebook').Strategy;
const PORT = process.env.PORT || 3001;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/index.js')(app, passport);
require('./config/passport')(passport);

passport.use(new FacebookStrategy({
    clientID: 117472415612865,
    clientSecret: 'beb1e5e851171aa80881b9b2f91909ff',
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate( function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));

// Connect to the Mongo DB
var db = process.env.MONGODB_URI || 'mongodb://localhost/facesOfBerkeley';

mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('mongoose connection is successful');
  }
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
