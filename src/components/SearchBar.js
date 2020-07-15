import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = { term: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui action input">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
        <button className="ui icon button" onClick={this.onFormSubmit}>
          <i className="search icon"></i>
        </button>
      </div>
    );
  }
}

export default SearchBar;