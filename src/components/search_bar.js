import React, {Component} from 'react';

//class vs normal javascript object
class SearchBar extends React.Component{

  constructor(props)
  {
    super(props);

    this.state = {term: 'default value'};
  }

//need a bind(this) to refer to the class bind
  render() {
    return (
    <div className="search-bar">
      <input
        value={this.state.term}
        onChange = {event => this.onInputChange(event.target.value)} />

    </div>
  );
}

  onInputChange(term)
  {
     this.setState({term});
     this.props.onSearchTermChange(term);
  }


}

export default SearchBar;
