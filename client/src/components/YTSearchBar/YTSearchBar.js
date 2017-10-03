import React from 'react';
import "./YTSearchBar.css";

class YTSearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <br/>
        <input
          placeholder='search videos here'
          value = {this.state.term}
          onChange = {(event) => this.onInputChange(event.target.value) } />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default YTSearchBar;