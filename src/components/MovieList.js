import React from 'react';
import '../styles/MovieList.css';
import MovieListEntry from './MovieListEntry'


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.movies = props.movies;
    this.movieList = this.movies.map((movie) => 
      <MovieListEntry movie={movie}/>);
  }
  render() {
    return (
      <div id="movieContainer">
        {this.movieList}
      </div>
    );
  }
}

export default MovieList;