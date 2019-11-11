import React, { Component } from 'react';
import Header from './components/Header';
import AlbumBox from './components/AlbumBox';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />

        <AlbumBox />
      </div>
    );
  }
}

export default App;
