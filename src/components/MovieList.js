import React from 'react';
import '../styles/MovieList.css';
import MovieListEntry from './MovieListEntry'


class MovieList extends React.Component {
  render() {
    let items = this.props.movies.map((movie, index) => {
          return <MovieListEntry movie={this.props.movies[index]}/>;
        });
    let noItems = (<div>
                    <h1>No movie match was found.</h1>
                   </div>);
    return (
      <div id="movieContainer">
        {items.length === 0 ? noItems : items}
      </div>
    );
  }
};

export default MovieList;