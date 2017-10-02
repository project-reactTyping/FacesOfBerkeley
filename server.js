const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
var User = require('./models/user.js');
const routes = require("./routes");
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passport.use(
  new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
  },
  accessToken => {
    console.log(accessToken);
  })
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);


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
app.use(morgan('combined'));
// Add routes, both API and view
app.use(routes);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/index.js')(app);
require('./config/passport')(passport);

passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate( function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

// Connect to the Mongo DB
var db = process.env.MONGODB_URI || 'mongodb://localhost/FacesOfBerkeley/Profile';

mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('mongoose connection is successful');
  }
});
app.post(mongoose, (req, res) => {
  var newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.send(err);
      console.log('user did not save');
    } else {
      res.send(user);
      console.log('user has been saved');
      res.redirect('/user');
    }
  });
});

app.get(mongoose, (req, res) => {
  console.log(req.body);
  newUser.find({})
  .exec(function(err, user) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(user);
    }
  })
});
// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
