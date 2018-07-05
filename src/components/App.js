import React from 'react';
import '../styles/App.css';
import data from '../example-data/movie-list-data.js';
import MovieList from './MovieList'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.movies = data;
    console.log('log: ', this.movies[0].title);
  }
  render() {
    return (
      <div id="app-wrapper">
        <div id="titleBar">
          <h1 id="appTitle">My React App</h1>
        </div>
        <div id="movieList">
          <MovieList movies={this.movies} />
        </div>
      </div>
    );
  }
}

export default App;