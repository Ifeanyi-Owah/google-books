import React, { Component } from 'react';
import './Forms.css';
import { relative } from 'path';


class Forms extends Component {
    render(){
      const inputBox = {width:'100%', height:'50px', border:'none', border:'1px solid #ebf0f4'}
      const par = {position:'relative',
       left:'0', 
       maxWidth:'80px', 
       marginTop:'35px', 
       marginTop:'35px',
       }
       const btn = {
                    position:'relative', 
                    left:'480px',
                    marginTop:'20px', 
                    padding:'15px 70px',
                    fontSize:'17px',
                    backgroundColor:'#17B9C4',
                    color:'#fff',
                    fontWeight:'700',
                    textTransform:'uppercase'
                  }
        return (
          <div>
              <form className="formStyle" method="POST">
                  <label for="title">
                    <p style={par}>Book title</p>
                    <input style={inputBox} type="text"  name="title" ></input>
                  </label>
                   <button style={btn} type="submit">Search</button>
              </form>
          </div>
        );
    }
}

export default Forms;