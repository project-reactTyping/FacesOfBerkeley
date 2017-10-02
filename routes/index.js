const express = require('express');
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./API");
const passport = require('passport');

module.exports = (app) => {
  // API Routes
  router.use("/API", apiRoutes);

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index');
  });


// router.post('/signup', (req, res) => {
//   var newUser = new User(req.body);
//   newUser.save((err, user) => {
//     if (err) {
//       res.send(err);
//       console.log('user did not save');
//     } else {
//       res.send(user);
//       console.log('user has been saved');
//       res.redirect('/user');
//     }
//   });
// });

// router.get('/signin', (req, res) => {
//   console.log(req.body);
//   newUser.find({})
//   .exec(function(err, user) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(user);
//     }
//   })
// });
  // router.post('/login', passport.
  //   authenticate('local', { successRedirect: '/user',
  //     failureFlash: 'Invalid username or password.',
  //     successFlash: 'Welcome!',
  //     failureRedirect: '/login' }));

  // router.post('/signup', passport.
  //   authenticate('local', { successRedirect: '/user',
  //     failureFlash: 'invalid inputs',
  //     successFlash: 'welcome',
  //     failureRedirect: '/'}));

  // router.get('/logout', function(req, res) {
  //   req.logout();
  //   res.redirect('/login');
  // });

  // router.get('/callback',
  //   passport.authenticate('auth0', {
  //     failureRedirect: '/failure'
  //   }),
  //   function(req, res) {
  //     res.redirect(req.session.returnTo || '/user');
  //   }
  // );

  // router.get('/failure', function(req, res) {
  //   var error = req.flash("error");
  //   var error_description = req.flash("error_description");
  //   req.logout();
  //   res.render('failure', {
  //     error: error[0],
  //     error_description: error_description[0],
  //   });
  // });

  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  // router.get('/auth/facebook', passport.authenticate('facebook'));
  // router.get('/auth/facebook/callback',
  // passport.authenticate('facebook', { successRedirect: '/',
  //                                     failureRedirect: '/login' }));
  // If no API routes are hit, send the React app
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/App.js"));
  });

  return router;
}