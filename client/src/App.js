import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import User from "./pages/User";
import Login from './components/Signin';
import SignUpForm from './components/SignUpForm';
import Friends from './pages/Friends';
import MyFollowers from './pages/Followers';
import Profile from './pages/Profile';
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
          <Route exact path='/user/Friends' component={Friends} />
          <Route exact path="/user/Followers" component={MyFollowers} />
          <Route exact path="/user/Profile" component={Profile} />
          <Route exact path="/user/home" component={User} />
        </Switch>
      </div>
    </Router>
;


export default App;
