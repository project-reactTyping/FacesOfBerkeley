const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./API");

// API Routes
router.use("/API", apiRoutes);

const express = require('express');
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/App.js"));
});

module.exports = router;
