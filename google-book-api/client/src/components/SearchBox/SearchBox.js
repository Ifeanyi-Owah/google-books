import React, { Component } from 'react';
import Forms from '../Forms/Forms';
import './SearchBox.css';

class SearchBox extends Component {
    render() {
        const searchHeading = {position:'absolute',left:'50px', top:'0'};
        return (
          <div className="searchBox">
              <h2 style={searchHeading}>Enter search below</h2>
                  <Forms />
          </div>
        );
    }
}

export default SearchBox;