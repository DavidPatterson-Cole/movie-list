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
    this.state = {value: '', movies: data};
  }

  handleSearch(searchVal) {
    this.setState({value: searchVal});
    var flag = false;
    var currentMovie = this.state.movies
    for (let movie of this.state.movies) {
      console.log('Movie title: ', movie.title);
      console.log('Search Value: ', searchVal);
      if (movie.title === searchVal) {
        flag = true;
        currentMovie = [ movie ];
      }
    }
    if (flag) {
      console.log('Current movie: ', currentMovie);
      this.setState({movies: currentMovie});
    }
  }

  render() {
    {console.log('Movies: ', this.state.movies)}
    {console.log('State: ', this.state.value)}
    return (
      <div id="app-wrapper">
        <div id="titleBar">
          <h1 id="appTitle">My React App</h1>
        </div>
        <div id="searchBar">
          <Search 
          searchVal={this.state.value}
          onSearchChange={this.handleSearch} />
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