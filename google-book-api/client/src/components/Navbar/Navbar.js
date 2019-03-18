import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    const hP = {padding: '15px',fontSize:'1.2em'};
    return (
      <header style={hP} >
        <h2><a href="/">Google Books</a></h2>
        <nav >
          <li><a href="/">Search</a></li>
          <li><a href="/saved">Saved</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;