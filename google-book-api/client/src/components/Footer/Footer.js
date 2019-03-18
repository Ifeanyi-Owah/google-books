import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const hP = {padding: '15px',fontSize:'1.2em'}
    return (
        <div>
            <footer style={hP}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Search</a></li>
                <li><a href="/saved">Saved</a></li>
            </footer>
        </div>
    );
  }
}

export default Footer;