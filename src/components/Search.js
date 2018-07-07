import React from 'react';
import '../styles/Search.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
    this.props.onSearchChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Search..." value={this.props.searchVal} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Go!" />
      </form>
    );
  }
}

export default Search;