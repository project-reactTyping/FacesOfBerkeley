import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import Login from './components/Signin';
import SignUpForm from './components/SignUpForm';
import Weather from './components/Weather';
import Calendar from './components/Calendar';
import ToDoList from './components/ToDoList';
import NavLinks from './components/NavLinks';
import Friends from './pages/Friends';
import MyFollowers from './pages/Followers';
import OAuth from './pages/OAuth';
import Profile from './pages/Profile';
import Nav from './components/Nav';
import './App.css';

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/user" component={User} />
        <Route exact path="/login" component={OAuth} />
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path='/todolist' component={ToDoList} />
        <Route exact path="/navlinks" component={NavLinks} />
        <Route exact path='/user/friends' component={Friends} />
        <Route exact path="/user/followers" component={MyFollowers} />
        <Route exact path="/user/profile" component={Profile} />
        <Route exact path="/user/home" component={User} />
        <Route exact path="/nav" component={Nav} />
      </Switch>
    </div>
  </Router>;

export default App;
