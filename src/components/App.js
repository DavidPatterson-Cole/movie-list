import React from 'react';
import '../styles/App.css';
// import data from '../example-data/movie-list-data.js';
import MovieList from './MovieList';
import Search from './Search';
import AddMovie from './AddMovie';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleMovie = this.handleMovie.bind(this);
    this.handleMovieSubmit = this.handleMovieSubmit.bind(this);

    // is this movies and added movies state the right way to think about this
    this.state = {searchVal: '', movies: [], movieVal: '', addedMovies: []};
  }

  handleSearch(searchVal) {
    this.setState({searchVal: searchVal});
  }

  handleSubmitSearch() {
    var currentMovie = [];
    // this will need to change with add movie functionality 
    for (let movie of this.state.addedMovies) {
      var flag = true;
      for (let char in this.state.searchVal) {
        if (movie.title[char] !== this.state.searchVal[char]) {
          flag = false;
        }
      }
      if (flag) {
        currentMovie.push(movie);
      }
    }
    this.setState({movies: currentMovie});
  }

  handleMovie(movieName) {
    // should I be pushing to movies?
    this.setState({movieVal: movieName});
  }

  handleMovieSubmit() {
    let currentMovieList = this.state.movies;
    currentMovieList.push({title: this.state.movieVal});
    let addedMovieList = this.state.addedMovies;
    addedMovieList.push({title: this.state.movieVal});

    console.log(currentMovieList);
    this.setState({movies: currentMovieList});
    this.setState({addedMovies: addedMovieList});
  }

  render() {
    return (
      <div id="app-wrapper">
        <div id="titleBar">
          <h1 id="appTitle">My React App</h1>
        </div>
        <div id="addMovies">
          <AddMovie 
          movieVal={this.state.movieVal}
          onChange={this.handleMovie} 
          onSubmit={this.handleMovieSubmit}/>
        </div>
        <div id="searchBar">
          <Search 
          searchVal={this.state.searchVal}
          onChange={this.handleSearch} 
          onSubmit={this.handleSubmitSearch} />
        </div>
        <div id="movieList">
          <MovieList 
          movies={this.state.movies}
          searchVal={this.state.searchVal} />
        </div>
      </div>
    );
  }
}

export default App;