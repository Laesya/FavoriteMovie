import React, { Component } from 'react';
import MovieFavorite from './component/MovieFavorite.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MovieFavorite />
        </header>
      </div>
    );
  }
}

export default App;