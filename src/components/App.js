import React from 'react';
import '../styles/App.css';
import data from '../example-data/movie-list-data.js';
import MovieList from './MovieList';
import Search from './Search';


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.movies = data;
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.originalList = data;
    this.state = {value: '', movies: data};
  }

  handleSearch(searchVal) {
    this.setState({value: searchVal});
  }

  handleSubmitButton() {
    var currentMovie = [];
    for (let movie of this.originalList) {
      var flag = true;
      for (let char in this.state.value) {
        if (movie.title[char] !== this.state.value[char]) {
          flag = false;
        }
      }
      if (flag) {
        currentMovie.push(movie);
      }
    }
    this.setState({movies: currentMovie});
  }

  render() {
    return (
      <div id="app-wrapper">
        <div id="titleBar">
          <h1 id="appTitle">My React App</h1>
        </div>
        <div id="searchBar">
          <Search 
          searchVal={this.state.value}
          onSearchChange={this.handleSearch} 
          onSubmit={this.handleSubmitButton} />
        </div>
        <div id="movieList">
          <MovieList 
          movies={this.state.movies}
          searchVal={this.state.value} />
        </div>
      </div>
    );
  }
}

export default App;