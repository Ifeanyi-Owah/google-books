import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <h2><a>Google Books</a></h2>
        <nav>
          <li><a>Search</a></li>
          <li><a>Saved</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;