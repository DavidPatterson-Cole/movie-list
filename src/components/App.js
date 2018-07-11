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

    this.handleWatched = this.handleWatched.bind(this);
    this.switchView = this.switchView.bind(this);

    // is this movies and added movies state the right way to think about this
    this.state = {searchVal: '', movies: [], movieVal: '', addedMovies: [], watched: [], view: false};
  }

  switchView(event) {
    // How do I change colour of button using css in react
    console.log(event.target.classList)
    this.state.view ? this.setState({view: false}) : this.setState({view: true});
  }

  handleWatched(movie) {
    var currentWatched = this.state.watched;
    currentWatched.push(movie);
    this.setState({watched: currentWatched});
    var currentUnwatched = this.state.movies;
    for (var i=0; i < currentUnwatched.length; i++) {
      if (currentUnwatched[i].title = movie.title) {
        currentUnwatched.splice(i, 1);
      }
    }
    this.setState({movies: currentUnwatched});
    console.log('Watched movies: ', this.state.watched[0].title);
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
          <button id="watched" type="submit" onClick={this.switchView}>
            Watched
          </button>
          <button id="toWatch" type="submit" onClick={this.switchView}>
            To Watch
          </button>
          <Search 
          searchVal={this.state.searchVal}
          onChange={this.handleSearch} 
          onSubmit={this.handleSubmitSearch} />
        </div>
        <div id="movieList">
          <MovieList 
          onWatched={this.handleWatched}
          movies={this.state.view ? this.state.watched : this.state.movies}
          searchVal={this.state.searchVal} />
        </div>
      </div>
    );
  }
}

export default App;