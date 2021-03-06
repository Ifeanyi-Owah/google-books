// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Saved from './pages/Saved';
import NoMatch from './pages/Nomatch';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
    <Switch>
       <Route exact path ="/" component={Home} />
       <Route exact path ="/saved" component={Saved} />
       <Route component={NoMatch} />
   </Switch>
      {/* <Footer /> */}
    </div>
  </Router>
  
);


export default App;
