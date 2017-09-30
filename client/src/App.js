import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import Signin from './components/Signin';
import SignUpForm from './components/SignUpForm';
import './App.css';

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/user" component={User} />
        <Route exact path="/login" component={Signin} />
      </Switch>
    </div>
  </Router>;

export default App;
