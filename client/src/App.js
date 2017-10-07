import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import User from "./pages/User";
import Login from './components/Signin';
import SignUpForm from './components/SignUpForm';
import './App.css';

const App = () =>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUpForm} />
          <CookiesProvider>
            <Route exact path="/user" component={User} />
          </CookiesProvider>
        </Switch>
      </div>
    </Router>
;


export default App;
