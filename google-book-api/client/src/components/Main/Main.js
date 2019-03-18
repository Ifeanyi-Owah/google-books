import React, { Component } from 'react';
import './Main.css';
import book from './book.png';

class Main extends Component {
    render(){
      const header = {fontSize:'60px',color:'#444'}
        return (
          <div className="mainHeading">
               <h1 style={header}>Google Books</h1> 
               <img src={book} alt="logo" className="logo"></img>
          </div>
        );
    }
}

export default Main;