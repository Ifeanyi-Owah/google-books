import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <h2><a>Google Books</a></h2>
        <nav>
          <li><a href="/">Home</a></li>
          <li><a href="/saved">Saved</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;