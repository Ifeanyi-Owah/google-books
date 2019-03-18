import React, { Component } from 'react';
import Main from '../components/Main/Main';
import SearchBox from '../components/SearchBox/SearchBox';



class Home extends Component {
  render() {
    return (
      <div>
         <Main />
         <SearchBox />
      </div>
    );
  }
}

export default Home;
