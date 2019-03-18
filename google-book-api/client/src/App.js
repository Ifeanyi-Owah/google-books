import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import SearchBox from './components/SearchBox/SearchBox';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navbar />
         <Main />
         <SearchBox />
      </div>
    );
  }
}

export default App;
