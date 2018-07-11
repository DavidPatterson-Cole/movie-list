import React from 'react';
import '../styles/MovieListEntry.css';

class MovieListEntry extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.props.onWatched(this.props.movie);
  }


  render() {
    return (
      <div id="entryBlock">
        <h1>{this.props.movie.title}</h1>
        <button type="submit" value="Watched" id="watchedButton" onClick={this.handleClick}>Watched</button>
      </div>
    );
  }
}

export default MovieListEntry;