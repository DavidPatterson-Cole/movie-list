import React from 'react';
import '../styles/MovieListEntry.css';

class MovieListEntry extends React.Component {
  render() {
    return (
      <div id="entryBlock">
        <h1>{this.props.movie.title}</h1>
      </div>
    );
  }
}

export default MovieListEntry;