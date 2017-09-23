import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import logo from './logo.svg';
import './App.css';

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={User} />
        <Route exact path="/user" component={User} />
      </Switch>
    </div>
  </Router>;

export default App;
