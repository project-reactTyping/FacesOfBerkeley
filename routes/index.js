const express = require('express');
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./API");

  // API Routes
  router.use("/api", apiRoutes);

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index');
  });

  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/App.js"));
  });

module.exports = router;